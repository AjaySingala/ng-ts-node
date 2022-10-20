import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public childTitle: string = "child title";
  public clickCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onCountChanged(count: number): void {
    this.clickCount = count;
  }

}
