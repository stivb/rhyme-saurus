import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dmApiThesaurusStem = "https://api.datamuse.com/words?ml=";
  dmApiRhymeStem =     "https://api.datamuse.com/words?rel_rhy=";

  constructor(private _http:HttpClient) { }

  public dmApiGetSynonyms(query:string)
  {
    let querystring:string = this.dmApiThesaurusStem + query;
    return this._http.get(querystring);
  }

  public dmApiGetRhymes(query:string)
  {
    let querystring:string = this.dmApiRhymeStem + query;
    return this._http.get(querystring);
  }
}
