import { studentTypes } from "../Types"

const add = (payload) => {
    return {
        type: studentTypes.ADD,
        payload: payload
    }
}
function deletee(payload) {
    console.log(payload);

    return {
        type: studentTypes.DELETE,
        payload: payload
    }
}

export { add, deletee }