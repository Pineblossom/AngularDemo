import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating = 0;
  private stars: Array<boolean>; // 星星图标是否为实心 true为空心 false为实心
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let index = 1; index <= 5; index++) { // 根据星级确定星星的显示
      if (index < this.rating) {
        this.stars.push(false);
      } else {
        this.stars.push(true);
      }
    }
  }

}
