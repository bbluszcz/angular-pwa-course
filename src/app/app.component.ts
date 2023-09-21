import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
// readonly VAPID_PUBLIC_KEY = 'BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg';

    constructor(private swUpdate: SwUpdate,  private swPush: SwPush) {

    }

    ngOnInit() {

      console.log("this.swUpdate ", this.swUpdate);
        if (this.swUpdate.isEnabled) {

            this.swUpdate.available.subscribe(() => {

                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }

            });

        }



    }

}

