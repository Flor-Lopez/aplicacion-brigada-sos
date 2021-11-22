import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Propiedad para saber si nuestro usuario esta logeado o no
  // pARA LOGEO
  // public isLogged: boolean = false;
  // public user: any;// user
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router, private location: Location) { }

  async ngOnInit(){
    // para logeo
    // // Este metodo nos devuelve una promesa
    // this.user = await this.authSvc.obtenerUsuarioActual();

    // if(this.user){ // Si el usuario existe
    //   this.isLogged = true;
    // }
  }

  async cerrarSesion(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error)
    }
  }

  regresar(){
    this.location.back();
  }


  //g


}
