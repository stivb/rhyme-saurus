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
  currentRhymeQuery="";

  synonymsToShow:string[] = new Array();
  rhymesToShow:string[] = new Array();

  allRhymes:string[];

  rhymesBySyllCountKVP=new Object();

  syllCounts = new Array();

  currentSyllableCount:number;


  constructor(private dataService:DataService) {}

  getDmSynonyms()
  {
    this.dataService.dmApiGetSynonyms(this.currentWordQuery).subscribe((data:dmWord[]) => {
        this.synonymsToShow = data.map(y=>y.word);
    });
  }

  

  showRhymesBySyllable(x:number)
  {
    this.currentSyllableCount=x;
    this.rhymesToShow = this.rhymesBySyllCountKVP[x];

  }

  getDmRhymes(iput:string)
  {
    this.currentRhymeQuery = iput;
    this.dataService.dmApiGetRhymes(iput).subscribe((data:dmRhyme[]) => {
      this.allRhymes = data.map(y=>y.word);
      var highestSyll = Math.max.apply(null, data.map(x=>x.numSyllables));
      let i;

      this.rhymesBySyllCountKVP=new Object();
      for (i=1;i<highestSyll+1;i++)
      {
          var wdsWithISyllables:string[];
          wdsWithISyllables = data.filter(x=> x.numSyllables===i).map(y=>y.word);
          if (wdsWithISyllables.length>0) this.rhymesBySyllCountKVP[i]=wdsWithISyllables;
      }
      this.syllCounts = Object.keys(this.rhymesBySyllCountKVP);

      var lowestSyll = Math.min.apply(null,this.syllCounts);
      this.rhymesToShow = this.rhymesBySyllCountKVP[lowestSyll];

    });
  }
}
