import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {

  images: Image[] = [
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
    new Image('1','Primera imagen','Descripcion Primera imagen','http://via.placeholder.com/300x200','http://via.placeholder.com/600x400'),
  ];

  constructor() { }

  getImages(){
    return this.images;
  }

  

}
