import {expect} from "chai";
import {solve} from "./cs2_q1";

describe("cs2_q1_test_cases", () => {
    it("John queue with 14 patients ahead of him", () => {
        expect(solve(14)).to.be.eq(49)
    })
})