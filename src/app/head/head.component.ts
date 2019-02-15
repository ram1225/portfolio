import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  fewWords: string = "Explore <br> Program in <br> The Digital World."
  animStop: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(()=> this.animStop=true, 1000);
  }

 

  click(element){
 
    window.scrollTo({ left: 0, top: element, behavior: 'smooth' });
 
  }
}
