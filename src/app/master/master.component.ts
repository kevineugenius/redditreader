import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  data = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // does not trigger ngOnChanges
    this.dataService.updated.subscribe(() => {
      this.data = this.dataService.currentList;
    });
    this.dataService.refreshData();
  }

  clicked(idx) {
    this.dataService.currentItem = idx;
  }

}
