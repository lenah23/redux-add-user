import './students.css'
import { useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { studentTypes } from "../../store/Types";
import { toast } from 'react-toastify';
import { deletee } from '../../store/Actions/studentAction';

export default function Students() {

    const dispatch = useDispatch()

    const inputName = useRef()
    const inputSurname = useRef()
    const inputScore = useRef()

    const students = useSelector((state) => {
        return state.students
    })

    return (<div className="container">
        <h2>Add a student</h2>
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            if (!inputName.current.value || !inputSurname.current.value || !inputScore.current.value) {
                return toast.warning("All the fields are required!")
            }
            dispatch({
                type: studentTypes.ADD,
                payload: {
                    id: Math.random(),
                    name: inputName.current.value,
                    surname: inputSurname.current.value,
                    score: inputScore.current.value,
                }
            })

            inputName.current.value = "";
            inputSurname.current.value = "";
            inputScore.current.value = "";

            let student = {
                name: inputName.current.value.trim(),
                surname: inputSurname.current.value.trim(),
                score: inputScore.current.value.trim(),
            }

            if (!localStorage.students) {
                localStorage.students = [];
            }

            let studentsArray = JSON.parse(localStorage.students || '[]');
            studentsArray.push(student);
            localStorage.students = JSON.stringify(studentsArray);

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
                    students.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.score}</td>
                            <td><a href="" onClick={e => {
                                e.preventDefault()
                                dispatch(deletee(index));
                            }}>Delete</a></td>
                        </tr>
                    })
                }
            </table>
        </div>
    </div>)
}