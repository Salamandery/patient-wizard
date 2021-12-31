export function nextStep(step) {
    return {
        type: '@multistep/NEXT_STEP',
        payload: { step },
    }
}
export function prevStep(step) {
    return {
        type: '@multistep/PREV_STEP',
        payload: { step },
    }
}
export function setCurrentStep(step) {
    return {
        type: '@multistep/SET_CURRENT_STEP',
        payload: { step },
    }
}