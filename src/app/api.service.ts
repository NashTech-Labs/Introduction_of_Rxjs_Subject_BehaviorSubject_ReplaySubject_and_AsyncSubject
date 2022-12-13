import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  behaviorSubject$ = new BehaviorSubject<number>(0);
  subject$ = new Subject;
  replaySubject$ = new ReplaySubject();
  asyncSubject$ = new AsyncSubject();

  constructor() {}
}
