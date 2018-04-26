import {ConfigService} from "./config.service";
import {Component} from "@angular/core";
import {UserResponse} from "./jsonBody.interface";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./config.styles.css']
})

export class ConfigComponent {
  error: any;
  headers: string[];
  config: UserResponse;
  posts: any;

  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
    this.posts = undefined;
  }

  //Gets the DATA from service
  showConfig() {
    this.configService.getConfig()
      .subscribe(
        data => this.config = data,
        err => console.log(err),
        () => console.log('Done loading response')
      );
  }

  getJSON() {
    this.configService.getConfig()
      .subscribe(
        data => this.posts = data
      )
  }

}
