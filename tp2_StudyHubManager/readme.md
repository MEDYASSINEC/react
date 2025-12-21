# Hooks React — Guide de référence

Ce document présente les Hooks React suivants :
- `useState`
- `useEffect`
- `useRef`
- `useContext`
- `useReducer`
- `useMemo`
- `useCallback`

Pour chaque Hook, vous trouverez :
- une **définition claire** ;
- le **mécanisme de fonctionnement** (comment React l’utilise) ;
- un **cas d’utilisation typique** ;
- un **exemple de code simple**.

---

## useState

### Définition
`useState` permet d’ajouter un **état local** à un composant fonctionnel.

### Mécanisme de fonctionnement
React associe chaque appel à `useState` à une position fixe dans l’ordre d’exécution du composant. Lorsqu’on met à jour l’état via la fonction fournie, React déclenche un **re-render** du composant avec la nouvelle valeur.

### Cas d’utilisation typique
Gérer des données qui changent dans le temps : compteur, champ de formulaire, ouverture/fermeture d’un menu, etc.

### Exemple de code
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur : {count}
    </button>
  );
}
```

---

## useEffect

### Définition
`useEffect` permet d’exécuter des **effets de bord** dans un composant fonctionnel.

### Mécanisme de fonctionnement
Après le rendu du composant, React exécute la fonction passée à `useEffect`. Le tableau de dépendances indique **quand** l’effet doit se relancer. React peut aussi appeler une fonction de nettoyage avant le prochain effet ou lors du démontage.

### Cas d’utilisation typique
- Appels API
- Abonnements (events, WebSocket)
- Manipulation du DOM
- Synchronisation avec une source externe

### Exemple de code
```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Temps : {seconds}s</p>;
}
```

---

## useRef

### Définition
`useRef` permet de créer une **référence mutable** qui persiste entre les rendus sans provoquer de re-render.

### Mécanisme de fonctionnement
React conserve l’objet retourné par `useRef` (`{ current: ... }`) tout au long du cycle de vie du composant. Modifier `current` ne déclenche pas de nouveau rendu.

### Cas d’utilisation typique
- Accéder directement à un élément du DOM
- Stocker une valeur mutable (timer, valeur précédente)

### Exemple de code
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </>
  );
}
```

---

## useContext

### Définition
`useContext` permet d’accéder à une **valeur de contexte** sans passer par les props.

### Mécanisme de fonctionnement
React recherche le `Provider` le plus proche dans l’arbre de composants et fournit sa valeur au composant consommateur. Toute mise à jour de cette valeur provoque un re-render des composants concernés.

### Cas d’utilisation typique
- Thème (clair/sombre)
- Langue
- Authentification / utilisateur courant

### Exemple de code
```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Bouton</button>;
}
```

---

## useReducer

### Définition
`useReducer` est une alternative à `useState` pour gérer un **état complexe** basé sur des actions.

### Mécanisme de fonctionnement
React appelle la fonction `reducer` avec l’état courant et une action, puis stocke le nouvel état retourné. Un dispatch déclenche un re-render.

### Cas d’utilisation typique
- États complexes
- Logique métier centralisée
- Remplacement simple de Redux pour de petits projets

### Exemple de code
```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

---

## useMemo

### Définition
`useMemo` permet de **mémoriser une valeur calculée** afin d’éviter des calculs coûteux inutiles.

### Mécanisme de fonctionnement
React recalcule la valeur uniquement lorsque les dépendances changent. Sinon, il renvoie la valeur mémorisée.

### Cas d’utilisation typique
- Calculs lourds
- Filtrage ou transformation de grandes listes

### Exemple de code
```jsx
import { useMemo } from "react";

function ExpensiveCalculation({ items }) {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <p>Total : {total}</p>;
}
```

---

## useCallback

### Définition
`useCallback` permet de **mémoriser une fonction** afin d’éviter sa recréation à chaque rendu.

### Mécanisme de fonctionnement
React renvoie la même instance de fonction tant que les dépendances ne changent pas. Utile pour éviter des re-renders inutiles de composants enfants.

### Cas d’utilisation typique
- Fonctions passées en props
- Optimisation avec `React.memo`

### Exemple de code
```jsx
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={increment}>{count}</button>;
}
```

---

## Conclusion
Ces Hooks couvrent la majorité des besoins courants en React moderne. Leur bonne utilisation permet d’écrire des composants plus lisibles, performants et maintenables.

