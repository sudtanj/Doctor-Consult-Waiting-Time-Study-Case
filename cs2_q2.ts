
export function solve(currentQueueCount: number, otherInServiceTime: number) {
    return currentQueueCount * ((0.5 * 3) + (0.5 * 4)) + otherInServiceTime
}
