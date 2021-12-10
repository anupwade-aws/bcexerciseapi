import "reflect-metadata";
import { DataService } from '../../service/DataService';

describe('UserService', () => {
  let service: DataService;

  beforeEach(() => {
    service = new DataService();
  });

  it('should get back all data', () => {
    expect(service.getData("-123.3646335","+48.4251378")).toBeDefined();
  });
});
