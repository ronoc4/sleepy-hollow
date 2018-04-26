import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {UserResponse} from "./jsonBody.interface";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class ConfigService {
  configUrl = 'http://localhost:8080/drupal8/api/blogs?_format=json';

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<UserResponse>(this.configUrl);
  }

  userLogIn(user) {
    let body = JSON.stringify(user);
    return this.http.post('http://localhost:8080/drupal8/user/login?_format=json', body, httpOptions);
  }

}
