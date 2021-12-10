"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const DataService_1 = require("../../service/DataService");
describe('UserService', () => {
    let service;
    beforeEach(() => {
        service = new DataService_1.DataService();
    });
    it('should get back all data', () => {
        expect(service.getData("-123.3646335", "+48.4251378")).toBeDefined();
    });
});
//# sourceMappingURL=DataService.spec.js.map