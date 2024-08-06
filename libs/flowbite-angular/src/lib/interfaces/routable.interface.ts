import type { FlowbiteLink } from '../common';
import type { FlowbiteLinkRouter } from '../services';

import type { InputSignal } from '@angular/core';

export interface RoutableInterface {
  flowbiteLinkRouter: FlowbiteLinkRouter;

  href: InputSignal<FlowbiteLink | undefined>;

  onNavigate: () => void | Promise<void>;
}
