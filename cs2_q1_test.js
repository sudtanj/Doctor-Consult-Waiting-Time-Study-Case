"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cs2_q1_1 = require("./cs2_q1");
describe("test_cases", function () {
    it("John queue with 14 patients ahead of him", function () {
        (0, chai_1.expect)((0, cs2_q1_1.solve)(14)).to.be.eq(49);
    });
});
//# sourceMappingURL=cs2_q1_test.js.map