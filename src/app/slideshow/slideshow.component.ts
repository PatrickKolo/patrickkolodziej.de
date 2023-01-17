import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['It-mood1.jpg', 'It-mood2.jpg', 'It-mood3.jpg'];

  headlines = [
    'Bring engineering to the next level!',
    'Born to code',
    'Passion for IT and learning!'
  ];

  currentImage = 0
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }



}
