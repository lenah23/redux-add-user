import './students.css'
import { useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { studentTypes } from "../../store/Types";
import { toast } from 'react-toastify';

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
        <h2>Add a student</h2>
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            if (!inputName.current.value || !inputSurname.current.value || !inputScore.current.value) {
               return toast.warning("All fields are required!")
            }
            dispatch({
                type: studentTypes.ADD,
                payload: {
                    id: students.length,
                    name: inputName.current.value,
                    surname: inputSurname.current.value,
                    score: inputScore.current.value,
                }
            })

            inputName.current.value = "";
            inputSurname.current.value = "";
            inputScore.current.value = "";
        }}>
            <input type="text" ref={inputName} placeholder="Enter your name"></input>
            <input type="text" ref={inputSurname} placeholder="Enter your surname"></input>
            <input type="number" ref={inputScore} placeholder="Enter the score"></input>
            <input type="submit" value="Add a student"></input>
        </form>

        <div>
            <table className='table'>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Score</th>
                    <th>Delete</th>
                </tr>
                {
                    students.map((student) => {
                        return <tr>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.score}</td>
                            <td><a href="" onClick={(id) => {
                                dispatch({
                                    type: "@studentTypes.DELETE",
                                    payload: id
                                });
                            }}>Delete</a></td>
                        </tr>
                    })
                }
            </table>
        </div>
    </div>)
}