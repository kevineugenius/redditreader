import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Keeping data here because the router object disallows traditional means
  // of sharing data between components
  selected = "top"; //top, new, hot (there are better ways to do this)
  currentList = [];
  currentItem = -1;
  updated: EventEmitter<void>;

  constructor(private http: HttpClient) { 
    this.updated = new EventEmitter<void>();
  }

  refreshData() {
    this.http.get(`https://www.reddit.com/r/3dprinting/top/.json?limit=20`).toPromise().then(res => {
      console.log(res);
      this.currentList = res["data"]["children"];
      this.updated.emit();
    });
  }
}
