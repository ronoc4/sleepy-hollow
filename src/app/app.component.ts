import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../data/config.service";
import {Observable} from "rxjs/Observable";
import {UserResponse} from "../data/jsonBody.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ConfigService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sleepy Hollow';
  results: any;
  imageUrl: any;
  responseBody: any;
  posts: any;
  readonly ROOT_URL = 'http://localhost:8080/drupal8/api/blogs?_format=json';

  constructor(private http: HttpClient, private configService: ConfigService) {
  }
  clear() {
    this.posts = undefined;
  }

  ngOnInit(): void {
    this.http.get<UserResponse>(this.ROOT_URL)
      .subscribe(
        data => {
      this.results = Object.keys(data).map(key => data[key]);
      console.log(this.results);
    });
  }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL);
  }

}
