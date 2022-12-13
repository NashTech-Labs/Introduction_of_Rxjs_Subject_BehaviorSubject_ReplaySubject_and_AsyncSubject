import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  asyncSubject: string;
  constructor(private api: ApiService) {}
  title = 'DemoProject';

  behaviorSubject:number;
  subject:string;
  replaySubject:string;

  ngOnInit() {
    this.api.behaviorSubject$.subscribe((res) => {
      this.behaviorSubject = res;
    });

    this.api.subject$.subscribe((respose:string) => {
      this.subject = respose;
    });

    this.api.replaySubject$.subscribe((val:string) => {
      this.replaySubject = val;
    });

    this.api.asyncSubject$.subscribe((value:string) => {
      this.asyncSubject = value;
      () => console.log("Sub1 Complete")
    });


  }
}




















//   fetch("http://api.ipify.org/?format=json").then(res=>
//   res.json()
//   ).then(data=>
//     console.log(data.ip));
