import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona = {
    nombre:'',
    edad:'',
    correo:'',
    ciudad:'',
    clave:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(miformulario: NgForm){
    // console.log(miformulario.value);
    if(miformulario.valid){
      console.log(miformulario.value);
      console.log("formulario valido")
    }else{
      console.log("Tu formulario esta mal");
    }

  }
}
