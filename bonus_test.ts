import {expect} from "chai";
import {DoctorFactory, solve} from "./bonus";

describe("bonus_test_cases", () => {
    it("John queue with 14 patients ahead of him with 2 doctor", () => {
        const factory = DoctorFactory.getInstance()
        const doctorsInfo = factory.getDoctorWithNormalDistribution([
            3, 4
        ])

        expect(solve(doctorsInfo, 14)).to.eq(49)
        expect(doctorsInfo[0].preferencesRatio).to.eq(0.50)
        expect(doctorsInfo[1].preferencesRatio).to.eq(0.50)
    })

    it("John queue with 14 patients ahead of him with 3 doctor", () => {
        const factory = DoctorFactory.getInstance()
        const doctorsInfo = factory.getDoctorWithNormalDistribution([
            3, 4, 3
        ])

        expect(solve(doctorsInfo, 14)).to.eq(46.666666666666664)
        expect(doctorsInfo[0].preferencesRatio).to.eq(0.3333333333333333)
        expect(doctorsInfo[1].preferencesRatio).to.eq(0.3333333333333333)
        expect(doctorsInfo[2].preferencesRatio).to.eq(0.3333333333333333)
    })
})