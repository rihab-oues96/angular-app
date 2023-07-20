import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTAsk: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTaskButton(): void {
    this.showAddTAsk = !this.showAddTAsk;
    this.subject.next(this.showAddTAsk);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
