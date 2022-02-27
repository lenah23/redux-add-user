import { studentTypes } from "../Types"


export default (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case studentTypes.ADD:
            console.log(state, action.payload);
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    surname: action.payload.surname,
                    score: action.payload.score,
                }
            ]
        case studentTypes.DELETE:
            return state.filter((student, id) => action.payload !== id);
        default: return state
    }
}

