import { studentTypes } from "../Types"


export default (state = [], action) => {
    console.log(action.payload);
    switch (action.type) {
        case studentTypes.ADD:
            console.log(state, action.payload);
            return [
                ...state,
                {
                    name: action.payload.name,
                    surname: action.payload.surname,
                    score: action.payload.score,
                }
            ]

        default: return state
    }
}


// export default (state = initialState, action) => {
//     switch (action.type) {
//         case studentTypes.ADD:
//             return {
//                 ...state,
//                 state: action.payload
//             }
        
//         default: return state
//     }
// }