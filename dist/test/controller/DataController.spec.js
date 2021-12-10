"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const DataController_1 = require("../../controller/DataController");
const DataService_1 = require("../../service/DataService");
describe("UserController", () => {
    let controller;
    beforeEach(() => {
        controller = new DataController_1.DataController(new DataService_1.DataService());
    });
    it("should return data from server", () => {
        expect(controller.getDataFromServer({
            body: {
                longitude: "-123.3646335",
                latitude: "+48.4251378",
            },
        })).toBeDefined();
    });
    it("should return error for missing propety latitude", () => {
        expect(controller.getDataFromServer({
            body: {
                longitude: "-123.3646335",
            },
        })).toStrictEqual({ error: "latitude is missing" });
    });
    it("should return error for missing propety longitude", () => {
        expect(controller.getDataFromServer({
            body: {
                latitude: "-123.3646335",
            },
        })).toStrictEqual({ error: "longitude is missing" });
    });
});
//# sourceMappingURL=DataController.spec.js.map