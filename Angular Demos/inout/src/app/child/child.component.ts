import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() PData: string = "0";
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.childEvent.emit(value);
  }
}
