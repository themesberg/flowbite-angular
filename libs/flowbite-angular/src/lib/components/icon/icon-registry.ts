/**
 * Thanks to Angular Material for Icon part of this library : https://github.com/angular/components
 */

import { trustedHTMLFromString } from './trusted-types';
import type { TrustedHTML } from './trusted-types';

import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import type { OnDestroy } from '@angular/core';
import { inject, Injectable, SecurityContext } from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { finalize, map, of, share, tap, throwError, type Observable } from 'rxjs';

export function getSvgIconFromNamedError(iconName: string): Error {
  return Error(`Unable to find icon with name ${iconName}`);
}

export function getSvgIconFailedToSanitizeRawError(raw: SafeHtml): Error {
  return Error(
    `The raw provided to IconRegistry was not trusted as safe HTML by ANGULAR's DOMSanitizer. Attempted raw was : ${raw as string}`,
  );
}

export function getSvgIconFailedToSanitizeUrlError(url: SafeResourceUrl): Error {
  return Error(
    `The URL provided to IconRegistry was not trusted as a resource URL via Angular's DOMSanitizer. Attempted URL was : ${url as string}`,
  );
}

export function getSvgIconNoHttpClientProvidedError(): Error {
  return Error(
    `Could not fid HttpClient provider for use with flowbite-angular icons. Please include the HttpClientModule from @angular/common/http in your app imports`,
  );
}

export interface SvgIconOptions {
  viewBox: string;
}

export class SvgIconConfig {
  svgElement: SVGElement | null = null;

  constructor(
    public url: SafeResourceUrl,
    public svgText: TrustedHTML | undefined,
    public options?: SvgIconOptions,
  ) {}
}

type LoadedSvgIconConfig = SvgIconConfig & { svgText: TrustedHTML };

@Injectable({
  providedIn: 'root',
})
export class IconRegistry implements OnDestroy {
  private _httpClient = inject(HttpClient, { optional: true });
  private _sanitizer = inject(DomSanitizer);
  private _document = inject(DOCUMENT);

  private _svgIconConfig = new Map<string, SvgIconConfig>();
  private _cachedSvgIconByUrl = new Map<string, SVGElement>();
  private _inProgressSvgIconFetch = new Map<string, Observable<TrustedHTML>>();

  public addSvgIcon(iconName: string, url: SafeResourceUrl, options?: SvgIconOptions): this {
    return this.addSvgIconInNamespace('', iconName, url, options);
  }

  public addRawSvgIcon(iconName: string, raw: SafeHtml, options?: SvgIconOptions): this {
    return this.addRawSvgIconInNamepsace('', iconName, raw, options);
  }

  public addSvgIconInNamespace(
    namespace: string,
    iconName: string,
    url: SafeResourceUrl,
    options?: SvgIconOptions,
  ): this {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, undefined, options));
  }

  public addRawSvgIconInNamepsace(namespace: string, iconName: string, raw: SafeHtml, options?: SvgIconOptions): this {
    const cleanRaw = this._sanitizer.sanitize(SecurityContext.HTML, raw);

    if (!cleanRaw) {
      throw getSvgIconFailedToSanitizeRawError(raw);
    }

    const trustedRaw = trustedHTMLFromString(cleanRaw);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedRaw, options));
  }

  public getSvgIconFromUrl(safeUrl: SafeResourceUrl): Observable<SVGElement> {
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);

    if (!url) {
      throw getSvgIconFailedToSanitizeUrlError(safeUrl);
    }

    const cachedIcon = this._cachedSvgIconByUrl.get(url);

    if (cachedIcon) {
      return of(cloneSvg(cachedIcon));
    }

    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, undefined));
  }

  public getSvgIconFromName(iconName: string, namespace: string): Observable<SVGElement> {
    const key = iconKey(namespace, iconName);
    const config = this._svgIconConfig.get(key);

    if (config) {
      return this._getSvgIconFromConfig(config);
    }

    return throwError(() => getSvgIconFromNamedError(key));
  }

  public ngOnDestroy(): void {
    this._svgIconConfig.clear();
    this._cachedSvgIconByUrl.clear();
  }

  private _addSvgIconConfig(namespace: string, iconName: string, config: SvgIconConfig): this {
    this._svgIconConfig.set(iconKey(namespace, iconName), config);

    return this;
  }

  private _getSvgIconFromConfig(config: SvgIconConfig): Observable<SVGElement> {
    if (config.svgText) {
      return of(cloneSvg(this._svgElementFromConfig(config as LoadedSvgIconConfig)));
    } else {
      return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
    }
  }

  private _loadSvgIconFromConfig(config: SvgIconConfig): Observable<SVGElement> {
    return this._fetchIcon(config).pipe(
      tap((svgText) => (config.svgText = svgText)),
      map(() => this._svgElementFromConfig(config as LoadedSvgIconConfig)),
    );
  }

  private _setSvgAttributes(svg: SVGElement, options?: SvgIconOptions): SVGElement {
    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false');

    if (options?.viewBox) {
      svg.setAttribute('viewBox', options.viewBox);
    }

    return svg;
  }

  private _svgElementFromConfig(config: LoadedSvgIconConfig): SVGElement {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);

      this._setSvgAttributes(svg, config.options);
      config.svgElement = svg;
    }

    return config.svgElement;
  }

  private _svgElementFromString(str: TrustedHTML): SVGElement {
    const div = this._document.createElement('div');
    div.innerHTML = str as unknown as string;

    const svg = div.querySelector('svg') as SVGElement;

    return svg;
  }

  private _fetchIcon(iconConfig: SvgIconConfig): Observable<TrustedHTML> {
    if (!this._httpClient) {
      throw getSvgIconNoHttpClientProvidedError();
    }

    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconConfig.url);

    if (!url) {
      throw getSvgIconFailedToSanitizeUrlError(iconConfig.url);
    }

    const inProgressFetch = this._inProgressSvgIconFetch.get(url);

    if (inProgressFetch) {
      return inProgressFetch;
    }

    const req = this._httpClient.get(url, { responseType: 'text' }).pipe(
      map((svg) => {
        return trustedHTMLFromString(svg);
      }),
      finalize(() => this._inProgressSvgIconFetch.delete(url)),
      share(),
    );

    this._inProgressSvgIconFetch.set(url, req);
    return req;
  }
}

function cloneSvg(svg: SVGElement): SVGElement {
  return svg.cloneNode(true) as SVGElement;
}

function iconKey(namespace: string, iconName: string): string {
  return `${namespace}:${iconName}`;
}
