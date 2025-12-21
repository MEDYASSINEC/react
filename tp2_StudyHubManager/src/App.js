import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';

export const userContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Créer la maquette du projet',
            done: false,
            priority: 'high',
            createdAt: '2025-01-15'
        }
    ]);

  const [autentifiedUser, setAutentifiedUser] = useState(null);

  return (
    <>
      <userContext.Provider value={{autentifiedUser, setAutentifiedUser, tasks, setTasks}}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
