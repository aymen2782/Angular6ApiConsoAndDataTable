import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  URL ='http://jsonplaceholder.typicode.com';
  images;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.URL+'/photos').subscribe(
      (response)=>{
        this.images = response;
        console.log(response);
      },
      (error)=>{
        console.error('Problème de connexion au service');
      },
      ()=>{
        console.info('Data posts transmis avec succès');
      }
    );
  }

}
