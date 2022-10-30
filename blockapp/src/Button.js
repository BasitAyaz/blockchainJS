function Button(props) {
  console.log(props);
  return (
    <button onClick={props.click} className="btn">
      {props.btnVal}
    </button>
  );
}

export default Button;
