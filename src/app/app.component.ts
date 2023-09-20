import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
readonly VAPID_PUBLIC_KEY = 'BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg';

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

    subscribeToNotifications() {

      this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub =>{
        console.log("this.VAPID_PUBLIC_KEY ", this.VAPID_PUBLIC_KEY);

        const key = sub.getKey('p256dh');
        console.log("key encoded to base64 ", btoa(String.fromCharCode.apply(null, new Uint8Array(key))));
        const auth = sub.getKey('auth');
 console.log("auth ", auth);

        // this._webPushHttpService.subcribeToChromeNotifications(
        //   sub.endpoint,
        //   key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : '',
        //   auth ? btoa(String.fromCharCode.apply(null, new Uint8Array(auth))) : ''
        // )
          // .subscribe()
      }

        )
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

}

