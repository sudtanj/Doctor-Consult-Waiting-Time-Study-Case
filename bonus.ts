
export class Doctor {
    // doctor avg serving time
    serviceTime: number
    // the weight is calculated based on the preferences of the people likely to choose this doctor
    // default to 0.5 if no preferences from patient
    // possible value = 0 - 1
    preferencesRatio: number

    constructor(serviceTime: number, preferencesRatio = 0.5) {
        this.serviceTime = serviceTime;
        this.preferencesRatio = preferencesRatio;
    }

    getAvgConsultTime() {
        return this.serviceTime * this.preferencesRatio;
    }
}

export function solve(doctorsInfo: Doctor[], positionInQueue: number): number {
    const totalDoctorAvgConsultTime = doctorsInfo.reduce(
        (p, v) => v.getAvgConsultTime() + p, 0
    )
    return positionInQueue * totalDoctorAvgConsultTime
}

