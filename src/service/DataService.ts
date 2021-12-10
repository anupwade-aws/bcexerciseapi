import { injectable } from 'inversify';
const axios = require('axios');

@injectable()
export class DataService {
  public getData(long: string,lat: string) {
    // create request url
    const url = `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`;
    return axios.get(url)
    .then((response: any) => {
      // return api data
      return response.data;
    })
    // handle api error
    .catch((err: any) => {throw new Error(err)});
  }
}
