import { studentTypes } from "../Types"

export const add = (payload) => {
    return {
        type: studentTypes.ADD,
        payload: payload
    }
}