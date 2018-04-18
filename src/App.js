import React, { Component } from 'react';
import Modal from 'react-modal';
import Daniel from './components/modal/modal'

class App extends Component {

  constructor(){
    super()
    this.state = {
      modalIsOpen: false,
      registroAlimento: []
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.salvar = this.salvar.bind(this)
  }
  salvar(valor) {
    console.log(valor)
    let { registroAlimento } = this.state

    registroAlimento.push(valor)

    this.setState({
      registroAlimento
    })
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {  
    return (
      <div>
        <button onClick={this.openModal}>
          ADD
        </button>
        {this.state.registroAlimento.map(value => {
          return(
            <p>{value.alimento}</p>
          )
        })}
        <Daniel isOpen={this.state.modalIsOpen} onClose={this.closeModal} onSave={this.salvar}/>
      </div>
    );
  }
}

export default App;
