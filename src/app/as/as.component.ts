import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-as',
  templateUrl: './as.component.html',
  styleUrls: ['./as.component.css']
})
export class AsComponent implements OnInit {


  dtOptions: any = {};
  private URL = 'https://jsonplaceholder.typicode.com';
  public myPosts ;
  dtTrigger = new Subject();
  constructor(private http : HttpClient) { }
  ngOnInit() {

  }

  public getPosts() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
        ]
    };
    this.http.get(this.URL+'/posts').subscribe(
      (response)=>{
        this.myPosts = response;
        this.dtTrigger.next();
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
