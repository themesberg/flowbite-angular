/**
 * Thanks to Angular Material for Icon part of this library : https://github.com/angular/components
 */

export declare interface TrustedHTML {
  __brand__: 'TrustedHTML';
}

export declare interface TrustedTypePolicyFactory {
  createPolicy(
    policyName: string,
    policyOptions: {
      createHTML?: (input: string) => string;
    }
  ): TrustedTypePolicy;
}

export declare interface TrustedTypePolicy {
  createHTML(input: string): TrustedHTML;
}

let policy: TrustedTypePolicy | undefined;

function getPolicy(): TrustedTypePolicy | undefined {
  if (!policy) {
    if (typeof window !== 'undefined') {
      const tWindow = window as unknown as { trustedTypes?: TrustedTypePolicyFactory };

      if (tWindow.trustedTypes !== undefined) {
        policy = tWindow.trustedTypes.createPolicy('angular#components', {
          createHTML: (s: string) => s,
        });
      }
    }
  }

  return policy;
}

export function trustedHTMLFromString(raw: string): TrustedHTML {
  return getPolicy()?.createHTML(raw) || (raw as unknown as TrustedHTML);
}
