import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/tinder", (req, res) => {
  res.send([
    {
      name: "Ismail Kemmoune",
      url:
        "https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.0-9/160579074_3635888009798447_9191712090894500234_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LDdqLBft5JsAX-fLweW&_nc_ht=scontent.fcmn2-1.fna&oh=a115f13566f51d26c6d879338625b05c&oe=60748CAC",
    },
    {
      name: "Alaa Zorkane",
      url:
        "https://scontent.fcmn2-2.fna.fbcdn.net/v/t1.0-9/130907680_811883169663527_844341172740134563_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=IHSWxGtOJsYAX8mzYyx&_nc_ht=scontent.fcmn2-2.fna&oh=4cfcf48c5d9a7a83b42ea1817fd82823&oe=60761682",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
