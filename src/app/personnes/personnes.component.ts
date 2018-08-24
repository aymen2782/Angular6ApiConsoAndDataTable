import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  URL ='http://localhost:3000/api/';
  personnes;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.URL+'/personnes').subscribe(
      (response)=>{
        this.personnes = response;
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
