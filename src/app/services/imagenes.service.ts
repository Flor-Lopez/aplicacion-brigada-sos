import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagenes.interface';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type CollentionPredicate<T> = string | AngularFirestoreCollection


@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(
              private http: HttpClient, 
              private afs: AngularFirestore
              ) { }

  getImagenes(){
    return this.http.get<Imagen[]>('http://localhost:5000/aplicacion-brigada-sos/us-central1/app/api/imagenes');
  }

  private col<T>(ref: CollentionPredicate<T>, queryFn?): AngularFirestoreCollection{
    return typeof ref === "string"? this.afs.collection(ref, queryFn): ref;
  }

  col$<T>(ref: CollentionPredicate<T>, queryFn?): Observable<T[]>{
    return this.col(ref, queryFn).snapshotChanges().pipe(
      map(docs =>{
        return docs.map(d => d.payload.doc.data()) as T[]
      })
    )
  }


}
