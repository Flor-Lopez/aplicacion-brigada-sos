import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './../../services/youtube.service';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-requiero-videos',
  templateUrl: './requiero-videos.component.html',
  styleUrls: ['./requiero-videos.component.css']
})
export class RequieroVideosComponent implements OnInit {


  constructor(private _cargaScripts: CargarScriptsService, private youtube: YoutubeService, private location: Location) {
    // Script a Cargar de javascript
    this._cargaScripts.carga(["youtube", "chatbot"]);
  }


  ngOnInit() {

  }

  regresar(){
    this.location.back();
  }

}





