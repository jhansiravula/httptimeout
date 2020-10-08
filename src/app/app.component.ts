import { Component } from "@angular/core";
//import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  name: string;

  constructor() {
    this.name = "session started";
    setTimeout(() => {
      this.name = "Error Timeout";
    }, 15000);
    /* setInterval(function () {
      //console.log("TimeOut!");
      this.router.navigatebyUrl(["/home"]);
    }, 15000);*/
  }
}
