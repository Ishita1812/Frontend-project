import { CanActivateChildFn } from '@angular/router';

export const courseGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
