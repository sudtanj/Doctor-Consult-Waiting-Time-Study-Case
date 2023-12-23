"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cs1_q2_1 = require("./cs1_q2");
var chai_1 = require("chai");
describe("test_cases", function () {
    it("if peter already gone for 2 minutes", function () {
        (0, chai_1.expect)((0, cs1_q2_1.solve)(7, 4, 2)).to.be.eq(26);
    });
    it("if peter already gone for 5 minutes", function () {
        (0, chai_1.expect)((0, cs1_q2_1.solve)(7, 4, 5)).to.be.eq(23);
    });
});
//# sourceMappingURL=cs1_q2_test.js.map