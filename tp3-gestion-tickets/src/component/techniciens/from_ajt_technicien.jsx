import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

function FormAjtTechnicien ( { show, closeForm, technicien } ) {
    const [nom, setNom] = useState(technicien.nom || "");
    const [specialite, setSpec] = useState(technicien.specialite || "");
    const [tel, setTel] = useState(technicien.tel || "");

    useEffect(()=> {
        setNom(technicien.nom || "");
        setSpec(technicien.specialite || "");
        setTel(technicien.tel || "");
    }, [show])

    const dispatch = useDispatch();

    const submitHundler = (e)=>{
        e.preventDefault();

        const nom = e.target.elements.nom.value;
        const spec = e.target.elements.spec.value;
        const tel = e.target.elements.tel.value;

        if(!nom || !spec || !tel){
            alert('Veuillez remplir tous les champs');
            return;
        }

        if (!technicien){
            let newId;
            newId = Math.floor(Math.random() * 1000000);

            const newTechnicien = {
                id: newId,
                nom: nom,
                specialite: spec,
                tel: tel,
                dateAdhesion: new Date().toISOString().split('T')[0]
            };

            dispatch({type: 'techniciens/addTechnicien', payload: newTechnicien});
        }else{
            const updatedTechnicien = {
                id: technicien.id,
                nom: nom,
                specialite: spec,
                tel: tel,
                dateAdhesion: technicien.dateAdhesion
            };
    
            dispatch({type: 'techniciens/updateTechnicien', payload: updatedTechnicien});

        }


        e.target.reset();

        closeForm()
        
    }

    

    return (
        <div className={show ? "overlay" : "modal-desactive"}>
            <div className="modal">
        <div className="form-container">
            <h3 className="form-title">Ajouter un technicien</h3>
            <button className='close-btn' onClick={() => closeForm()}>x</button>
            <form onSubmit={(e)=> submitHundler(e) } className="form">
                <div className="form-group">
                    <label htmlFor="nom" className="label">Nom</label>
                    <input type="text" id="nom" className="input-field" value={nom} onChange={(e)=>setNom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="sepc" className="label">Specialite</label>
                    <input type="text" id="spec" className="input-field" value={specialite} onChange={(e)=>setSpec(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="tel" className="label">Tel</label>
                    <input type="text" id='tel' value={tel} onChange={(e)=>setTel(e.target.value)}  />
                </div>
                {!technicien ? 
                    (<input type="submit" className="btn form-btn" value="Enregistrer" />)
                :   (<input type="submit" className="btn form-btn" value="modifier" />) }
            </form>
        </div>
        </div>
    </div>
    )
}

export default FormAjtTechnicien;