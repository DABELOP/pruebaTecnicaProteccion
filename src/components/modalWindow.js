import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const NumberCards = () => {
  const [cardsNumber, setCardsNumber] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    // Aquí puedes realizar cualquier otra acción después de que el usuario haya seleccionado el número de tarjetas
    console.log("Número de tarjetas seleccionadas:", cardsNumber);
  }, [cardsNumber]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNumberChange = (event) => {
    const number = parseInt(event.target.value);
    setCardsNumber(number);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>Cuantas tarjetas quieres ver ?</h2>
        <p>
          <label>
            Número de tarjetas:
            <input type="number" value={cardsNumber} onChange={handleNumberChange} />
          </label>
        </p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default NumberCards;
