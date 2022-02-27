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
            // const studentFilter = state.filter((student, id) => id !== action.payload.id);
            const studentFilter = state.filter((student, id) =>
                student.id === action.payload.id ? null : student
            );
            state = studentFilter;
            return state;
        default: return state
    }
}

