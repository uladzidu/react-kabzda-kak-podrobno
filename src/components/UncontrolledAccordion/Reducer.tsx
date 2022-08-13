type reducerType = {
    type: string
}
export const reducer = (state: boolean, action: reducerType) => {

    switch (action.type) {
        case 'TOGGLE' :
            return !state
        default :
            return state
    }
}