import { useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { studentTypes } from "../../store/Types";

export default function Students() {

    const dispatch = useDispatch()

    const inputName = useRef()
    const inputSurname = useRef()
    const inputScore = useRef()

    const students = useSelector((state) => {
        console.log(state)
        return state.students
    }) 

    return (<div className="container">
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch({
                type: studentTypes.ADD,
                payload: {
                    name: inputName.current.value,
                    surname: inputSurname.current.value,
                    score: inputScore.current.value,
                }
            })
            inputName.current.value = "";
            inputSurname.current.value = "";
            inputScore.current.value = "";
        }}>
            <input type="text" ref={inputName}></input>
            <input type="text" ref={inputSurname}></input>
            <input type="number" ref={inputScore}></input>
            <input type="submit"></input>
        </form>

        <div>
            {
                students.map((student) => {
                    return <table>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Score</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.score}</td>
                            <td><a href="">Delete</a></td>
                        </tr>
                    </table>
                })
            }
        </div>
    </div>)
}