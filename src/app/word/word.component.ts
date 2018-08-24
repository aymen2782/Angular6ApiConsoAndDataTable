import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor() { }

  color = "red";
  myFont = 'Garamond';
  mySize = "12px";
  showMe =true;
  ngOnInit() {
  }

  changeColor(couleur) {
    this.color=couleur;
  }

  changeFont(font) {
    console.log(font)
    this.myFont = font;
  }

  changeSize(size) {
    this.mySize = size+'px';
  }

  showHide(showButton) {
   // console.log(showButton);
    this.showMe = !this.showMe;
    showButton.value == 'Hide Me' ? showButton.value = 'Show Me' : showButton.value = 'Hide Me';
  }

}
