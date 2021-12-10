"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const DataService_1 = require("../service/DataService");
const types_1 = require("../constant/types");
let DataController = class DataController {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getDataFromServer(request) {
        const lat = request.body.latitude;
        const long = request.body.longitude;
        if (lat === undefined || lat === "" || !lat) {
            return { error: "latitude is missing" };
        }
        if (long === undefined || long === "" || !long) {
            return { error: "longitude is missing" };
        }
        return this.dataService.getData(long, lat);
    }
};
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DataController.prototype, "getDataFromServer", null);
DataController = __decorate([
    inversify_express_utils_1.controller("/api/getdata"),
    __param(0, inversify_1.inject(types_1.default.DataService)),
    __metadata("design:paramtypes", [DataService_1.DataService])
], DataController);
exports.DataController = DataController;
//# sourceMappingURL=DataController.js.map