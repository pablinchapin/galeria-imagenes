import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  selectedImage: Image;
  
  
  constructor(
    private imageService:ImageService
  ) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  imageClickOnSelect(image: Image){
    console.log(image);
    this.selectedImage = image;
  }

}
