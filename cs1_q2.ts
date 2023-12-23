export function solve(patientAheadCount: number, avgConsultTime: number, timeSpent: number) {
    return (patientAheadCount * avgConsultTime) - timeSpent
}