import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();

  constructor() {}

  sendMessage(product) {
    console.log('show me if product is passed down: ', product)
    this.subject.next(product); // triggering an event
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
