import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-card',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent {
  @Input()
  id:string = "0";
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

  constructor(){}

}
