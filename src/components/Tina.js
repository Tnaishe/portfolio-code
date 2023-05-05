import "./TinaStyles.css";

function Tina(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="TinaImg" src={props.tinaImg} />

        <div className="tina-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Tina;
