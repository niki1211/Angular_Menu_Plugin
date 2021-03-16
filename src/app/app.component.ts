import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nk-gallery';
  display : boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onOpen() {
    let element = document.getElementById("open");
    element?.classList.toggle("active");
    this.display = !this.display;
  }
}
