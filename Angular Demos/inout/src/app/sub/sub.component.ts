import { NgTemplateOutlet } from '@angular/common';
import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  private _title: string;
  public clickCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public set title(title: string) {
    this._title = title;

  }
  public get title() {
    return this._title;
  }

  @Output()
  onChanged = new EventEmitter<number>();
  
  countChange(count: number) {
    count++;
    this.clickCount = count;
    this.onChanged.emit(this.clickCount)
  }

}
