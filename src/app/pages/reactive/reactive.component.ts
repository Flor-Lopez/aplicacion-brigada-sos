import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fromB:FormBuilder ) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    this.formulario = this.fromB.group(
      {
        name: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(12)]],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
      }
    );
  }

  save(){
    console.log(this.formulario);
  }
}

