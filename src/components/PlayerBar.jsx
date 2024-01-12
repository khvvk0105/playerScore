import "../style/jcRight.css";
import "../style/johnsena.css";
import "../style/names.css";

export default function PlayerBar({ name, score, countUp, countDown }) {
  return (
    <div className="johnCena">
      <div className="names">
        <h2>{name}</h2>
      </div>
      <div className="jcRight">
        <button onClick={() => countUp(score)}>+</button>
        {score}
        <button onClick={() => countDown(score)}>-</button>
      </div>
    </div>
  );
}
