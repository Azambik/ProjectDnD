import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CharacterSheetService} from '../../charactersheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characterSheet',
  templateUrl: './characterSheet.component.html',
  styleUrls: ['./characterSheet.component.scss']
})
export class characterSheetComponent implements OnInit {
  constructor(private httpClient: HttpClient,private charactersheetService: CharacterSheetService, private router: Router ) { }

  ngOnInit() {
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
  
  createCharacterSheet(){
    this.charactersheetService.printCharacter();
  }
}