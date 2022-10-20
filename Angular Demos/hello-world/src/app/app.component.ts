import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  public name = "Ajay Singala";
  public topic = "Data Binding";
  public image = "/assets/Angular_logo.png";
  random:string = ""

  onClick() {
    console.log("Thanks for subscribing.")
    this.random = "R E S E T!"
  }
}
