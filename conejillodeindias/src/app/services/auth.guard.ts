import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  if (authService.isConected()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
