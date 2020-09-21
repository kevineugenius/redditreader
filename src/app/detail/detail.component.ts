import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  itemData = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    if (this.dataService.currentItem >= 0) {
      this.itemData = this.dataService.currentList[this.dataService.currentItem];
      console.log(this.itemData);
    }
  }

}
