import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sinonimo',
  templateUrl: './sinonimo.component.html',
  styleUrls: ['./sinonimo.component.css']
})
export class SinonimoComponent implements OnInit {

  @Input() src:string;
  @Input() syn:string;

  constructor() { }

  ngOnInit() {
  }

}
