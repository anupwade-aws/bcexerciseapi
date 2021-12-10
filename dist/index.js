"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const bodyParser = require("body-parser");
const types_1 = require("./constant/types");
const DataService_1 = require("./service/DataService");
require("./controller/DataController");
let container = new inversify_1.Container();
container.bind(types_1.default.DataService).to(DataService_1.DataService);
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
let serverInstance = server.build();
serverInstance.listen(3000);
console.log("Server started on port 3000 :)");
//# sourceMappingURL=index.js.map