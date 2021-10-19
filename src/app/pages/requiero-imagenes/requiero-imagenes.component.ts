import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-requiero-imagenes',
  templateUrl: './requiero-imagenes.component.html',
  styleUrls: ['./requiero-imagenes.component.css']
})
export class RequieroImagenesComponent implements OnInit {

  constructor(private _cargaScripts: CargarScriptsService, private location: Location) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["chatbot"]);
  }

  ngOnInit(): void {
  }

  regresar(){
    this.location.back();
  }

}
