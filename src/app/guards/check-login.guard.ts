import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private auth: AngularFireAuth,  private router: Router){
  }

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{


      return this.auth.authState.pipe(
        take(1),
        switchMap(async (authState)=>{
          // Si se encuentra autenticado ya no lo dejo pasar a login
          if(authState){
            this.router.navigate(['/home']);
            alert('Usted ya esta autenticado');
            console.log('Usted ya esta autenticado');
            return true;
          }else{//si no
            this.router.navigate(['/login']);
            console.log('No autenticado');
            return false;
          }
        })
      )
  }

}
