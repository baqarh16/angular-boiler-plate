import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    
    // ✅ Check if the user is logged in (Modify this logic as needed)
    const token = localStorage.getItem('token');

    if (token) {
      return true; // Allow access
    } else {
      // 🚫 Redirect to login page if not authenticated
      //this.router.navigate(['/login']);
      return true//false;
    }
  }
}
