import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  author:string = '';
  @Input()
  date:string = '';
  @Input()
  photoCover:string = '';
  @Input()
  noticeTitle:string = '';
  @Input()
  noticeResume:string = '';
  @Input()
  tags:string[] = [];
  @Input()
  id:string = "0"
  constructor(){}
}
