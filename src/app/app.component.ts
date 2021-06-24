import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  test() {
    let eventDescription = "true";
    console.log("Un valor" + eventDescription);
    console.log("Entra");
  }
  title = 'angular-tour-of-heroes';
}
