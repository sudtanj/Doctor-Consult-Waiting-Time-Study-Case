import {expect} from "chai";
import {solve} from "./cs2_q2";

describe("cs2_q2_test_cases", () => {
    it("John queue with 14 patients ahead of him while lucas already past 2 minutes", () => {
        expect(solve(14, 2)).to.be.eq(51)
    })
})