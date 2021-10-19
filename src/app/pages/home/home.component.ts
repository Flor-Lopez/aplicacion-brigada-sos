import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _cargaScripts: CargarScriptsService) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["chatbot"]);
  }

  ngOnInit(): void {
  }

}
