
const listeners: (() => void)[] = []

export function addVoteListener(listener: () => void) {
    listeners.push(listener)
}

export function removeVoteListener(listener: () => void) {
    listeners.splice(listeners.indexOf(listener), 1)
}
export function triggerVoteEvent() {
    console.log("inside listiner vote event triggered")
    for (const listener of listeners) {
        listener()
    }
}