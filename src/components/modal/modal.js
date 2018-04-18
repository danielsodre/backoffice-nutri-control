import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Daniel extends Component {

  constructor(props){
    super(props)
    this.state = {
      alimento: "",
      tipo: "",
      grama: "", 
      sodio: "", 
      proteina: "", 
      carbo: "", 
      gluten: "",
    }
    
    this.handlerAlimento = this.handlerAlimento.bind(this);
    this.handlerCarbo = this.handlerCarbo.bind(this);
    this.handlerProteina = this.handlerProteina.bind(this);
    this.handlerTipo = this.handlerTipo.bind(this);
    this.handlerGluten = this.handlerGluten.bind(this);
    this.handlerGrama = this.handlerGrama.bind(this);
    this.handlerSodio = this.handlerSodio.bind(this);
    this.salvar = this.salvar.bind(this);

  }

  handlerAlimento( event ) {
    this.setState({
      alimento: event.target.value
    })
  }
  handlerProteina( event ) {
    this.setState({
      proteina: event.target.value
    })
  }
  handlerGrama( event ) {
    this.setState({
      grama: event.target.value
    })
  }
  handlerSodio( event ) {
    this.setState({
      sodio: event.target.value
    })
  }
  handlerTipo( event ) {
    this.setState({
      tipo: event.target.value
    })
  }
  handlerCarbo( event ) {
    this.setState({
      carbo: event.target.value
    })
  }
  handlerGluten( event ) {
    this.setState({
      gluten: event.target.value
    })
  }
  salvar() {
    let { alimento, tipo, grama, sodio, proteina, carbo, gluten } = this.state

    const registroAlimento = { alimento, tipo, grama, sodio, proteina, carbo, gluten }

    this.props.onSave(registroAlimento)
  }

  render() { 
      const { isOpen, onClose, onSave } = this.props 
    return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ width: "400px", textAlign: "center"}}>
            <label>Alimento</label>
            <br/>
            <input onChange={(event) => this.setState({
              alimento: event.target.value
            })} />
            <br/>
            <br/>
            <label>Gramas</label>
            <br/>
            <input type="number" onChange={this.handlerGrama} />
            <br/>
            <br/>
            <label>Tipo</label>
            <br/>
            <select onChange={this.handlerTipo}>
              <option value="carne">Carne</option>
              <option value="carne">Legumes</option>
              <option value="carne">Grão</option>
              </select>
            <br/>
            <br/>
            <label>Proteina</label>
            <br/>
            <input type="number" onChange={this.handlerProteina} />
            <br/>
            <br/>
            <label>Carbo</label>
            <br/>
            <input type="number" onChange={this.handlerCarbo}/>
            <br/>
            <br/>
            <label>Sódio</label>
            <br/>
            <input type="number" onChange={this.handlerSodio}/>
            <br/>
            <br/>
            <label>Gluten</label>
            <br/>
            <input type="Checkbox" onChange={this.handlerGluten}/>
            <br/>
            <br/>
            <button onClick={this.salvar}>Salvar</button>
            <button onClick={onClose}>close</button>
          </div>
        </Modal>
    );
  }
}

export default Daniel;
