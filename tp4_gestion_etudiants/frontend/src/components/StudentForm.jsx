import { useRef } from "react";
import { useDispatch } from 'react-redux';
import FormElement from "./FormElement";
import { addStudent, updateStudent } from "../features/students/studentSlice-exJS";

function StudentForm ( { data2modify, closeForm } ){
    const dispatch = useDispatch();

    const id_input = useRef('');
    const pnom_input = useRef('');
    const nom_input = useRef('');
    const nv_input = useRef('');

    const enregistrer = (e) => {
        e.preventDefault();

        const id = e.target.elements.idS.value;
        const prenom = e.target.elements.prenom.value;
        const nom = e.target.elements.nom.value;
        const niveau = e.target.elements.niveau.value;

        if (!id || !prenom || !nom || !niveau){
            alert('Veuillez remplir tous les champs');
            return ;
        }

        if (data2modify){
            const updatedStudent = {
                id,
                prenom,
                nom,
                niveau,
                dateInscription : data2modify.dateInscription
            };

            // dispatch({type: 'students/updateStudent', payload: updatedStudent});
            dispatch(updateStudent(id, updatedStudent))
        }else {
            const newStudent = {
                id,
                prenom,
                nom,
                niveau,
                dateInscription : new Date().toISOString().split('T')[0]
            }
            
            // dispatch({type: 'students/addStudent', payload: newStudent});
            console.log(newStudent)
            dispatch(addStudent(newStudent))
        }

        e.target.reset();

        closeForm();
    }

    const formFields = [
        {type: 'text', name:'idS', label:'Identifiant (unique)', value: data2modify?.id || '', setRef: id_input},
        {type: 'text', name:'nom', label:'Nom', value: data2modify?.nom || '', setRef: nom_input},
        {type: 'text', name:'prenom', label:'Prenom', value: data2modify?.prenom || '', setRef: pnom_input},
        {type: 'text', name:'niveau', label:'Niveau', value: data2modify?.niveau || '', setRef: nv_input}
    ]
    return (
    <div className="overlay">
        <div className="modal">
            <div className="form-container">
                <h3 className="form-title">Ajouter un élève</h3>
                <button className="close-btn" onClick={closeForm}>x</button>
                <form onSubmit={e => enregistrer(e)}>
                    {formFields.map((i, index) => (
                        <FormElement key={index} type={i.type} name={i.name} label={i.label} value={i.value} setRef={i.setRef} />
                    ))}
                    
                    {data2modify ?
                        (<input type="submit" className="btn form-btn" value="Modifier" />):
                        (<input type="submit" className="btn form-btn" value="Enregistrer" />)
                    }
                </form>
            </div>
        </div>
    </div>)
}

export default StudentForm;