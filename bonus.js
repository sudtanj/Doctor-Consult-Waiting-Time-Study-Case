"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.Doctor = void 0;
var Doctor = /** @class */ (function () {
    function Doctor(serviceTime, preferencesRatio) {
        if (preferencesRatio === void 0) { preferencesRatio = 0.5; }
        this.serviceTime = serviceTime;
        this.preferencesRatio = preferencesRatio;
    }
    Doctor.prototype.getAvgConsultTime = function () {
        return this.serviceTime * this.preferencesRatio;
    };
    return Doctor;
}());
exports.Doctor = Doctor;
function solve(doctorsInfo, positionInQueue) {
    var totalDoctorAvgConsultTime = doctorsInfo.reduce(function (p, v) { return v.getAvgConsultTime() + p; }, 0);
    return positionInQueue * totalDoctorAvgConsultTime;
}
exports.solve = solve;
//# sourceMappingURL=bonus.js.map