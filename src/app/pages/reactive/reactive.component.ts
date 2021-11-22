import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Servicio } from 'src/app/models/imagenes.interface';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  formulario: FormGroup;

    // Creacion de Objeto mediante la interfaz de modelo
    // todoServicio: Servicio = {
    //   imagen:'',
    //   descripcion:'',
    //   categoria:'',
    // };


  constructor( private fromB:FormBuilder, private authSvc: AuthService ) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    this.formulario = this.fromB.group(
      {
        imagen: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(12)]],
        descripcion: ['', Validators.required],
        categoria: ['', Validators.required]
      }
    );
  }

  // save(){
  //         //Si no existe un ID ,vamos a crear un nuevo reporte
  //       this.authSvc.addServicio(this.todoServicio).then(() =>{

  //       console.log('Registro duardado correctamente');
  //       console.log(this.formulario.value);
  //     });

  // }
}

