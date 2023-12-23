"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cs2_q2_1 = require("./cs2_q2");
describe("test_cases", function () {
    it("John queue with 14 patients ahead of him while lucas already past 2 minutes", function () {
        (0, chai_1.expect)((0, cs2_q2_1.solve)(14, 2)).to.be.eq(51);
    });
});
//# sourceMappingURL=cs2_q2_test.js.map