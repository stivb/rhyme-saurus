import { Component, OnInit ,Output} from '@angular/core';
import {DataService} from '../data.service';
import {dmWord} from '../word-chain';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-synbin',
  templateUrl: './synbin.component.html',
  styleUrls: ['./synbin.component.css']
})
export class SynbinComponent implements OnInit {

  @Output() selectionChanged:EventEmitter<string> = new EventEmitter();

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

  setSelectedSynonym(iput:string)
  {
    this.currentRhymeQuery = iput;
    this.selectionChanged.emit(this.currentRhymeQuery);

  }

}
