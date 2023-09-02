function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>    
    <li key={number.toString()}>
      {number}
    </li>  
  );  
  return (
    <ul>{listItems}</ul>  
  );
}

export default NumberList;