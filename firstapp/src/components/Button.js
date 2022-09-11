function Button(props) {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return(
    <div>
      <button onClick={handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;