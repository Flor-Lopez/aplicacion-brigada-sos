import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { ImagenesService } from 'src/app/services/imagenes.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/models/imagenes.interface';


@Component({
  selector: 'app-requiero-imagenes',
  templateUrl: './requiero-imagenes.component.html',
  styleUrls: ['./requiero-imagenes.component.css']
})
export class RequieroImagenesComponent implements OnInit {
  // FORMULARIO REACTIVO
  buscadorForm: FormGroup;
  imagenes: any[];

  mensaje_seleccion:boolean = true;
  mensaje_title_quemadura: boolean = false;
  mensaje_title_herida: boolean = false;

  constructor(
              private _cargaScripts: CargarScriptsService, 
              private formBuil: FormBuilder,
              private http: HttpClient,
              private location: Location, 
              private  imgSvc: ImagenesService,
              
              ) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["chatbot"]);
    this.createForm();
  }

  ngOnInit(): void {
   
    // this.imgSvc.getImagenes().subscribe( datos => {
    //   this.imagenes = datos;
    //   console.log(datos);
    // });
    
  }

  regresar(){
    this.location.back();
  }

  get categoriaInvalido(){
    return this.buscadorForm.get('categoria').invalid && this.buscadorForm.get('categoria').touched
  }

  createForm(){
    this.buscadorForm = this.formBuil.group(
      {
        categoria: ['', Validators.required]
      }
    );
  }

  // Obtener todos los datos
  getAll(){
    this.imgSvc.col$('imagenes').subscribe(listDoc => console.log(listDoc));
  }

  onBuscar(){
      if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Quemadura'){
        this.mensaje_seleccion = false;
        this.mensaje_title_herida = false;
        this.mensaje_title_quemadura = true;
        this.getImagenesQuemadura();   
    }
    
    else if(this.buscadorForm.valid && this.buscadorForm.value.categoria == 'Heridas'){
      this.mensaje_seleccion = false;
      this.mensaje_title_herida = true;
      this.mensaje_title_quemadura = false;


      this.getImagenesHeridas();

    }
    else{
      console.log("Tu formulario esta mal o no hay datos con ese resultado");
    }
  }

  // Filtrados
  getImagenesQuemadura(){
    console.log('Valor cortada');
    console.log(this.buscadorForm.value);
    this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "Quemadura")).subscribe( datos => {
      this.imagenes = datos;
      console.log(datos);
    });

  }

    getImagenesHeridas(){
      console.log('Valor Heridas');
      console.log(this.buscadorForm.value);
      this.imgSvc.col$('imagenes', ref => ref.where('categoria', '==',  "heridas")).subscribe( datos => {
        this.imagenes = datos;
        console.log(datos); 
        
      });

  }


}
