import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charactersheet',
  templateUrl: './charactersheet.component.html',
  styleUrls: ['./charactersheet.component.scss']
})
export class CharactersheetComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  loadCharacterSheet(): void {
//example of how to set up a fetch request 
    this.httpClient.get('http://192.168.1.224:8080/getCharacterSheet')
    .toPromise().then((response: any) => {
      console.log(response);
    }).catch((error: any) => {
      console.log(error);
    });

  }

}
