import { Component } from '@angular/core';
import {DataService} from './data.service';
import {dmWord} from './word-chain';
import {dmRhyme} from './word-chain';
import {HttpErrorResponse} from  '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhyme-saurus';

  currentWordQuery="";

  synonymsToShow:string[] = new Array();
  rhymesToShow:string[] = new Array();


  constructor(private dataService:DataService) {}

  getDmSynonyms()
  {
    this.dataService.dmApiGetSynonyms(this.currentWordQuery).subscribe((data:dmWord[]) => {
        this.synonymsToShow = data.map(y=>y.word);
    });
  }

  getDmRhymes(iput:string)
  {
    this.dataService.dmApiGetRhymes(iput).subscribe((data:dmRhyme[]) => {
      this.rhymesToShow = data.map(y=>y.word);
    });
  }
}
