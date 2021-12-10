import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import TYPES from "./constant/types";
import { DataService } from "./service/DataService";
import "./controller/DataController";
import express = require("express");

// load everything needed to the Container
let container = new Container();
container.bind<DataService>(TYPES.DataService).to(DataService);

// start the server
let server = new InversifyExpressServer(container);
 
// set server config
server.setConfig((app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
});

// build server
let serverInstance = server.build();
// start server
serverInstance.listen(3000);

console.log("Server started on port 3000 :)");
