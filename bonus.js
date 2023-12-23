"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.DoctorFactory = void 0;
var DoctorFactory = /** @class */ (function () {
    function DoctorFactory() {
    }
    DoctorFactory.getInstance = function () {
        if (this.inst == null) {
            this.inst = new DoctorFactory();
        }
        return this.inst;
    };
    DoctorFactory.prototype.getDoctorWithNormalDistribution = function (serviceTimes) {
        return serviceTimes.map(function (v) { return new Doctor(v, (1 / serviceTimes.length)); });
    };
    DoctorFactory.inst = null;
    return DoctorFactory;
}());
exports.DoctorFactory = DoctorFactory;
var Doctor = /** @class */ (function () {
    function Doctor(serviceTime, preferencesRatio) {
        this.serviceTime = serviceTime;
        this.preferencesRatio = preferencesRatio;
    }
    Doctor.prototype.getAvgConsultTime = function () {
        return this.serviceTime * this.preferencesRatio;
    };
    return Doctor;
}());
function solve(doctorsInfo, positionInQueue) {
    var totalDoctorAvgConsultTime = doctorsInfo.reduce(function (p, v) { return v.getAvgConsultTime() + p; }, 0);
    return positionInQueue * totalDoctorAvgConsultTime;
}
exports.solve = solve;
//# sourceMappingURL=bonus.js.map