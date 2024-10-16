export { IconComponent } from './icon.component';
export type { SvgIconOptions } from './icon-registry';
export {
  IconRegistry,
  SvgIconConfig,
  getSvgIconFailedToSanitizeRawError,
  getSvgIconFailedToSanitizeUrlError,
  getSvgIconFromNamedError,
  getSvgIconNoHttpClientProvidedError,
} from './icon-registry';
export type { TrustedHTML, TrustedTypePolicy, TrustedTypePolicyFactory } from './trusted-types';
export { trustedHTMLFromString } from './trusted-types';
