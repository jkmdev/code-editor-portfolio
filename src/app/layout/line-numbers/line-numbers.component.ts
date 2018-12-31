import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-numbers',
  templateUrl: './line-numbers.component.html',
  styleUrls: ['./line-numbers.component.scss']
})
export class LineNumbersComponent implements OnInit {

  lineHeight = 115;
  lineNumbers : string[] = new Array(this.lineHeight);

  constructor() { 

    for(var i = 1;i <= this.lineHeight; i++) {
      this.lineNumbers[i] = " " + i;
    }

  }

  ngOnInit() {
  }

}
