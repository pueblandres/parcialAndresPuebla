import { useState } from 'react';

function Formulario(props) {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1Value.length > 2 && input2Value.length > 5) {
      setError("")
      props.onFormSubmit(input1Value, input2Value);
    }else{
      setError("Por favor chequea que la información sea correcta")
    }
  }
  function handleChange1(e) {
    setInput1Value(e.target.value)
  }
  function handleChange2(e) {
    setInput2Value(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Ingrese su nombre</label>
        <input
          type="text"
          id="input1"
          value={input1Value}
          onChange={handleChange1}
        />
        <br />
        <label htmlFor="input2">Ingrese tu color favorito</label>
        <input
          type="text"
          id="input2"
          value={input2Value}
          onChange={handleChange2}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Formulario;
