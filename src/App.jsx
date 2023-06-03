import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Card from './componentes/Card';

function App() {

  const [cardData, setCardData] = useState({});

  const handleFormSubmit = (input1Value, input2Value) => {
      setCardData({ input1Value, input2Value });
  };

  return (
    <div>
      <Formulario 
        onFormSubmit={handleFormSubmit} />
      <Card 
        input1Value={cardData.input1Value} 
        input2Value={cardData.input2Value} />
    </div>
  );
}


export default App;
