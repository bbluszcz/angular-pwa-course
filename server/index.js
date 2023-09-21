"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var read_all_lessons_route_1 = require("./read-all-lessons.route");
var add_push_subscriber_route_1 = require("./add-push-subscriber.route");
var send_newsletter_route_1 = require("./send-newsletter.route");
var bodyParser = require('body-parser');
var webpush = require('web-push');
var vapidKeys = {
    "publicKey": "BOcQl3kDtK0qAYO6VeY3iCOVRJZhe-fyssP03-4L64utheLIRJpvbe8y7iKxZxJtwANJ-HS6Ynn3N4eotYluaNA",
    "privateKey": "t5GFzmGeSSbK0gxRrl-2Nowu31sKxhqcNn7ecmym-fg"
};
webpush.setVapidDetails('mailto: <bartlomiej.bluszcz@contractors.roche.com>', vapidKeys.publicKey, vapidKeys.privateKey);
var app = express();
app.use(bodyParser.json());
// REST API
app.route('/api/lessons')
    .get(read_all_lessons_route_1.readAllLessons);
app.route('/api/notifications')
    .post(add_push_subscriber_route_1.addPushSubscriber);
app.route('/api/newsletter')
    .post(send_newsletter_route_1.sendNewsletter);
// launch an HTTP Server
var httpServer = app.listen(9000, function () {
    console.log("HTTP Server running at http://localhost:9000");
});
