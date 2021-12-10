"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const inversify_1 = require("inversify");
const axios = require('axios');
let DataService = class DataService {
    getData(long, lat) {
        const url = `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`;
        return axios.get(url)
            .then((response) => {
            return response.data;
        })
            .catch((err) => { throw new Error(err); });
    }
};
DataService = __decorate([
    inversify_1.injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map