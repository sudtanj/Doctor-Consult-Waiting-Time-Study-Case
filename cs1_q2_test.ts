import {solve} from "./cs1_q2";
import {expect} from "chai";

describe("cs1_q2_test_cases", () => {
    it("if peter already gone for 2 minutes", () => {
        expect(solve(7, 4, 2)).to.be.eq(26)
    })
    it("if peter already gone for 5 minutes", () => {
        expect(solve(7, 4, 5)).to.be.eq(23)
    })
})