"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var bonus_1 = require("./bonus");
describe("test_cases", function () {
    it("John queue with 14 patients ahead of him", function () {
        var doctorsInfo = [
            new bonus_1.Doctor(3),
            new bonus_1.Doctor(4)
        ];
        (0, chai_1.expect)((0, bonus_1.solve)(doctorsInfo, 14)).to.eq(49);
    });
});
//# sourceMappingURL=bonus_test.js.map