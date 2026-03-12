import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos el Router para poder redirigir si no está logueado
  const router = inject(Router);

  // Verificamos si existe nuestra variable en el localStorage
  const isLogged = localStorage.getItem('logged') === 'true';

  if (isLogged) {
    return true; // Si está logueado, le permitimos pasar
  } else {
    // Si no está logueado, lo mandamos al login (o a la ruta raíz '/')
    router.navigate(['/home']);
    return false; // Bloqueamos el acceso a la ruta '/stats'
  }
};