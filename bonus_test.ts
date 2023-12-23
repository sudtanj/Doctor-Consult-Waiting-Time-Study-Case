import {expect} from "chai";
import {Doctor, solve} from "./bonus";

describe("bonus_test_cases", () => {
    it("John queue with 14 patients ahead of him", () => {
        const doctorsInfo: Doctor[] = [
            new Doctor(3),
            new Doctor(4)
        ]

        expect(solve(doctorsInfo, 14)).to.eq(49)
    })
})