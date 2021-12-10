import {
  controller,
  httpPost,
} from "inversify-express-utils";
import { inject } from "inversify";
import { DataService } from "../service/DataService";
import { Request } from "express";
import TYPES from "../constant/types";

// controller for api
@controller("/api/getdata")
export class DataController {
  constructor(@inject(TYPES.DataService) private dataService: DataService) {}
  @httpPost("/")
  public getDataFromServer(request: Request){
    // retrieve cordinates from request
    const lat = request.body.latitude;
    const long = request.body.longitude;

    // checking property exist on body
    if (lat === undefined || lat === "" || !lat) {
      return { error: "latitude is missing" };
    }
    // checking property exist on body
    if (long === undefined || long === "" || !long) {
      return { error: "longitude is missing" };
    }
    // call service to get data
    return this.dataService.getData(long, lat);
  }
}
