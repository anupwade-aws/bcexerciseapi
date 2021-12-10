import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from "inversify";
import TYPES from "./constant/types";
import { DataService } from "./service/DataService";
import "./controller/DataController";
import express = require("express");
var cors = require('cors');

// load everything needed to the Container
let container = new Container();
container.bind<DataService>(TYPES.DataService).to(DataService);

// start the server
let server = new InversifyExpressServer(container);
 
// set server config
server.setConfig((app) => {
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

});

// build server
let serverInstance = server.build();
// start server
serverInstance.listen(8000);

console.log("Server started on port 8000 :)");
