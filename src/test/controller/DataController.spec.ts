import "reflect-metadata";
import { DataController } from "../../controller/DataController";
import { DataService } from "../../service/DataService";

describe("UserController", () => {
  let controller: DataController;

  beforeEach(() => {
    controller = new DataController(new DataService());
  });

  it("should return data from server", () => {
    expect(
      controller.getDataFromServer({
        body: {
          longitude: "-123.3646335",
          latitude: "+48.4251378",
        },
      } as any)
    ).toBeDefined();
  });

  it("should return error for missing propety latitude", () => {
    expect(
      controller.getDataFromServer({
        body: {
          longitude: "-123.3646335",
        },
      } as any)
    ).toStrictEqual({ error: "latitude is missing" });
  });

  it("should return error for missing propety longitude", () => {
    expect(
      controller.getDataFromServer({
        body: {
          latitude: "-123.3646335",
        },
      } as any)
    ).toStrictEqual({ error: "longitude is missing" });
  });
});
