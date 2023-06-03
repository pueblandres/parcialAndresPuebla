import style from './Card.module.css';

function Card(props) {

  return (
    <div className={style.card}>
        <h2>{props.input1Value}</h2>
        <h2>{props.input2Value}</h2>
    </div>
  );
}

export default Card;
