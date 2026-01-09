import { useEffect, useState } from "react";

function CycleVie() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1. MONTAGE uniquement
  useEffect(() => {
    console.log("Composant monté (une seule fois)");
    
    return () => {
      console.log("Composant démonté (nettoyage final)");
    };
  }, []);

  // 2. MISE À JOUR de 'count'
  useEffect(() => {
    console.log(`Count mis à jour : ${count}`);
    
    return () => {
      console.log(`Nettoyage avant prochaine mise à jour de count`);
    };
  }, [count]);

  // 3. À CHAQUE rendu
  useEffect(() => {
    console.log("Composant rendu (chaque fois)");
  });

  return (
    <div>
      <h2>Cycle de vie</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
      
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tapez quelque chose"
      />
    </div>
  );
}

export default CycleVie;