import React from 'react';

class MonComposant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteur: 0 };
    console.log('1. Constructeur');
  }

  componentDidMount() {
    console.log('3. componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. componentDidUpdate');
    console.log('Ancien state:', prevState.compteur);
    console.log('Nouveau state:', this.state.compteur);
  }

  componentWillUnmount() {
    console.log('5. componentWillUnmount');
  }

  incrementer = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };

  render() {
    console.log('2. Render');
    return (
      <div>
        <h1>Compteur : {this.state.compteur}</h1>
        <button onClick={this.incrementer}>
          Incrémenter
        </button>
      </div>
    );
  }
}

export default MonComposant;
