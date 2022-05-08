import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  collectionName = 'Products';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadImageMeta(): Observable<Array<Product>> {
    return this.afs.collection<Product>(this.collectionName, ref => ref.orderBy('price')).valueChanges();
  }

  loadImage(image: string){
    return this.storage.ref(image).getDownloadURL();
  }
}
