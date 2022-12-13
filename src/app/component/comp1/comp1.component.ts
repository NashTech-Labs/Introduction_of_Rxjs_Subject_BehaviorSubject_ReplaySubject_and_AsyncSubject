import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  subjects: string = '';
  constructor(private api: ApiService) {}

  ngOnInit() {
    // The subject is observable. It must have the ability to emit a stream of values
    // The previous example shows, we can use the next method to emit values into the stream.
    this.api.subject$.next("Hi ,I am Subject")

    // BehaviorSubject requires an initial value and stores the current value
    // and emits it to the new subscribers.
    this.api.behaviorSubject$.next(1);
    this.api.behaviorSubject$.next(2);
    this.api.behaviorSubject$.next(3);
    this.api.behaviorSubject$.error("error");
    this.api.behaviorSubject$.complete();


    // ReplaySubject replays old values to new subscribers
    // when they first subscribe.
    this.api.replaySubject$.next("Welcome, This is ReplaySubject")

    // AsyncSubject only emits the latest value only when it completes.
    // If it errors out then it will emit an error, but will not emit any values.
    this.api.asyncSubject$.next("Welcome, This is AsyncSubject")
    this.api.asyncSubject$.complete();



  }
}
