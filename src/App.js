import './App.css';
import Card2 from './components/card2'
import Modal from 'react-modal';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [cardsNumber, setCardsNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    console.log("Número de tarjetas seleccionadas:", cardsNumber);
  }, [cardsNumber]);

  let cardsNumberInput = useRef(null);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNumberChange = (event) => {
    const number = parseInt(cardsNumberInput.current.value);
    setCardsNumber(number);
    closeModal();
  };

  const cards = Array.from({ length: cardsNumber }, (_, i) => i + 1);

  return (

    <div className='contentWrapper'>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modalWrapper'>
        <h2>¡Bienvenido al album de tarjetas de super heroes!</h2>
        <h3>¿Cuantas tarjetas quieres ver?</h3>
        <p>
          <label>
            Número de tarjetas:
            <input type="number" ref={cardsNumberInput} />
          </label>
        </p>
        <button onClick={handleNumberChange}>Aceptar</button>
      </Modal>

      {cards.map(card => <Card2 id={card} key={card} />)}
    </div >
  );
}

export default App;
