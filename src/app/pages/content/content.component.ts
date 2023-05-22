import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataSimulation } from 'src/app/data/dataSimulation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  author:string = '';
  date:string = '';
  photoCover:string = '';
  noticeTitle:string = '';
  noticeDescription:string[] = [];
  tags:string[] = [];
  private id: string | null = '0';

  constructor(
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value=>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id);
  }


  setValuesToComponent(id:string | null){
    const result = dataSimulation.filter(article => article.id == id)[0]
    this.noticeTitle = result.title;
    this.noticeDescription = result.description;
    this.photoCover = result.photo;
    this.author = result.author;
    this.date = result.date;
    this.tags = result.tags;
  }
}
