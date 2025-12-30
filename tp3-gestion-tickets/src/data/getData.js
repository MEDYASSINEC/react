// import { useEffect, useState } from "react";

// Fonctions utilitaires pour les slices Redux (sans hooks)
export function getEquipementFromStorage() {
    const saved = localStorage.getItem('equipements');
    return saved ? JSON.parse(saved) : [];
}

export function saveEquipementToStorage(equipements) {
    localStorage.setItem('equipements', JSON.stringify(equipements));
}

export function getTicketFromStorage() {
    const saved = localStorage.getItem('tickets');
    return saved ? JSON.parse(saved) : [];
}

export function saveTicketToStorage(tickets) {
    localStorage.setItem('tickets', JSON.stringify(tickets));
}

export function getTechnicienFromStorage() {
    const saved = localStorage.getItem('techniciens');
    return saved ? JSON.parse(saved) : [];
}

export function saveTechnicienToStorage(techniciens) {
    localStorage.setItem('techniciens', JSON.stringify(techniciens));
}

// Hooks React
// export function useTicket (listTickets) {
//     const [tickets, setTickets] = useState(()=> {
//         const savedT = localStorage.getItem('tickets');
//         return savedT ? JSON.parse(savedT) : listTickets;
//     })

//     useEffect(()=>{
//         localStorage.setItem("tickets", JSON.stringify(tickets));
//     }, [tickets]);

//     return [tickets, setTickets];
// }

// export function useTechnicien(listTech) {
//     const [techniciens, setTechniciens] = useState(()=> {
//         const savedTch = localStorage.getItem('techniciens');
//         return savedTch ? JSON.parse(savedTch) : listTech;
//     })

//     useEffect(()=> {
//         localStorage.setItem('techniciens', JSON.stringify(techniciens));
//     }, [techniciens]);

//     return [techniciens, setTechniciens];
// }

// export function useEquipement (listEquipement) {
//     const [equipements, setEquipements] = useState(()=> {
//         const savedEq = localStorage.getItem('equipements');
//         return savedEq ? JSON.parse(savedEq) : listEquipement;
//     })

//     useEffect(()=> {
//         localStorage.setItem('equipements', JSON.stringify(equipements));
//     }, [equipements]);

//     return [equipements, setEquipements];
// }