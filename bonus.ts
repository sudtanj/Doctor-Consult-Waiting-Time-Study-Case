
export class DoctorFactory {
    private static inst: DoctorFactory | null = null

    static getInstance() {
        if (this.inst == null) {
            this.inst = new DoctorFactory()
        }
        return this.inst
    }

    private constructor() {
    }

    getDoctorWithNormalDistribution(serviceTimes: number[]) {
        return serviceTimes.map(v => new Doctor(v, (1 / serviceTimes.length)))
    }
}

class Doctor {
    // doctor avg serving time
    serviceTime: number
    // the weight is calculated based on the preferences of the people likely to choose this doctor
    preferencesRatio: number

    constructor(serviceTime: number, preferencesRatio: number) {
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

