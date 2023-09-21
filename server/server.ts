
import * as express from 'express';
import {Application} from "express";
import {readAllLessons} from "./read-all-lessons.route";
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNewsletter} from "./send-newsletter.route";
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
  "publicKey": "BOcQl3kDtK0qAYO6VeY3iCOVRJZhe-fyssP03-4L64utheLIRJpvbe8y7iKxZxJtwANJ-HS6Ynn3N4eotYluaNA",
  "privateKey": "t5GFzmGeSSbK0gxRrl-2Nowu31sKxhqcNn7ecmym-fg"
};


webpush.setVapidDetails(
    'mailto: <bartlomiej.bluszcz@contractors.roche.com>',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app: Application = express();


app.use(bodyParser.json());


// REST API
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);



// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:9000");
});









