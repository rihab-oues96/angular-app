import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.scss'],
})
export class CmpComponent {
  @Input() title: string = '';
}
