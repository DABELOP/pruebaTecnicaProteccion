import './App.css';
import Card from './components/card.js'


function App() {

  const cardsNumber = 40
  const cards = Array.from({ length:cardsNumber }, (_, i) => i+1);

  return (

    <div className='contentWrapper'>

      {cards.map(card => <Card show='img' id={card} key={card}/>)}

    </div>
  );
}

export default App;
