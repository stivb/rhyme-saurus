import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {dmWord} from '../word-chain';

@Component({
  selector: 'app-synbin',
  templateUrl: './synbin.component.html',
  styleUrls: ['./synbin.component.css']
})
export class SynbinComponent implements OnInit {

  currentWordQuery="";
  currentRhymeQuery="";
  synonymsToShow:string[] = new Array();

  constructor(private dataService:DataService) {}

  ngOnInit() {
  }

  getDmSynonyms()
  {
    this.dataService.dmApiGetSynonyms(this.currentWordQuery).subscribe((data:dmWord[]) => {
        this.synonymsToShow = data.map(y=>y.word);
    });
  }

}
