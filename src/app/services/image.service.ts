import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImageService {

  /*
  images: Image[] = [
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
  ];
  */
  constructor(private http:Http) { }

  /*
  getImages(){
    return this.images;
  }
  */

  getImages(): Observable<Image[]>{
    return this.http.get('http://localhost:9094/images/findall').map((response:Response) => response.json());
  }
  

}
