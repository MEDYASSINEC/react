import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentForm from "./StudentForm";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import image from './2148586588.jpg';
import { deleteStudent, fetchStudents } from "../features/students/studentSlice-exJS";


function StudentList () {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStudents())
    }, [])

    const students = useSelector(state => state.students.list) || [];
    console.log(students)
    const [toModify, setToModify] = useState('');
    const [showForm, setShowForm] = useState(false);

    const deleteT = (id)=> {
        if (window.confirm(`Vous voullez supprimer l'étudiant ${id} ?` )){
            // dispatch({type: 'students/deleteStudent', payload: id});
            dispatch(deleteStudent(id));
        }
    }

    const edit = (t) => {
        setToModify(t);
        setShowForm(true);
    }

    if (students.length === 0) {
        return (<>
            <i>pas d'élève trouvé</i>
            <button className="btn btn-margin" onClick={() => setShowForm(true)}>Ajouter</button>
            {showForm && <StudentForm closeForm={()=> setShowForm(false)} data2modify={toModify} />}
        </>)
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Niveau d'étude</th>
                        <th>date d'inscription</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(t => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.nom}</td>
                            <td>{t.prenom}</td>
                            <td>{t.niveau}</td>
                            <td>{t.dateInscription}</td>
                            <td>
                                <span className='editBtn' onClick={() => edit(t)} ><MdModeEditOutline /></span>
                                <span className='delBtn' onClick={()=> deleteT(t.id)}><FaRegTrashCan /></span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-margin" onClick={() => setShowForm(true)}>Ajouter</button>
            {showForm && <StudentForm closeForm={()=> setShowForm(false)} data2modify={toModify} />}
        </>
    )
}

export default StudentList;