import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from './../../services/paises.service';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {

  paises: any[] = [];

  usuario = {
    name:'',
    apellido:'',
    email:'',
    pais: '',
    // estadocivil: ''
  }

  constructor( private paisS:PaisesService) { }

  ngOnInit(): void {
    this.paisS.getPaises()
    .subscribe( (countrys: any) => {
      console.log(countrys);
      this.paises = countrys;
      this.paises.unshift({
        name:'Selecciona un pais',
        alpha3Code:''
      });

    });
  }

  save(form: NgForm){

  if( form.invalid){
    Object.values(form.controls).forEach( controlsitos => {
      controlsitos.markAsTouched;
    }
  );

    return;
  }
  console.log(form.value);
}
}
