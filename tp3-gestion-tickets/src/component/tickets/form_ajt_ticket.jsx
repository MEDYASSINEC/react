import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

function FormAjtTicket ( { show, closeForm, ticket } ) {
    const [titre, setTitre] = useState(ticket.title || "");
    const [description, setDesc] = useState(ticket.description || "");
    const [etat, setEtat] = useState(ticket.etat || "");

    useEffect(()=> {
        setTitre(ticket.title || "");
        setDesc(ticket.description || "");
        setEtat(ticket.etat || "");
    }, [show])

    const dispatch = useDispatch();

    const submitHundler = (e)=>{
        e.preventDefault();

        const titre = e.target.elements.title.value;
        const desc = e.target.elements.desc.value;
        const etat = e.target.elements.etat.value;

        if(!titre || !desc || !etat){
            alert('Veuillez remplir tous les champs');
            return;
        }

        if (!ticket){
            let newId;
            newId = Math.floor(Math.random() * 1000000);

            const newTicket = {
                id: newId,
                title: titre,
                description: desc,
                etat: etat,
                dateCreation: new Date().toISOString().split('T')[0]
            };

            dispatch({type: 'tickets/addTicket', payload: newTicket});
        }else{
            const updatedTicket = {
                id: ticket.id,
                title: titre,
                description: desc,
                etat: etat,
                dateCreation: ticket.dateCreation
            };
    
            dispatch({type: 'tickets/updateTicket', payload: updatedTicket});

        }


        e.target.reset();

        closeForm()
        
    }

    

    return (
        <div className={show ? "overlay" : "modal-desactive"}>
            <div className="modal">
        <div className="form-container">
            <h3 className="form-title">Ajouter un ticket</h3>
            <button className='close-btn' onClick={() => closeForm()}>x</button>
            <form onSubmit={(e)=> submitHundler(e) } className="form">
                <div className="form-group">
                    <label htmlFor="title" className="label">Titre</label>
                    <input type="text" id="title" className="input-field" value={titre} onChange={(e)=>setTitre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc" className="label">Description</label>
                    <input type="text" id="desc" className="input-field" value={description} onChange={(e)=>setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="etat" className="label">Etat</label>
                    <select name="etat" id="etat" className="input-field" value={etat} onChange={(e)=>setEtat(e.target.value)} >
                        <option value="nouveau">nouveau</option>
                        <option value="en_cours">en cours</option>
                        <option value="en_attente">en attente</option>
                        <option value="resolu">résolu</option>
                        <option value="ferme">fermé</option>
                    </select>
                </div>
                {!ticket ? 
                    (<input type="submit" className="btn form-btn" value="Enregistrer" />)
                :   (<input type="submit" className="btn form-btn" value="modifier" />) }
            </form>
        </div>
        </div>
    </div>
    )
}

export default FormAjtTicket;