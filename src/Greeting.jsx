function List(props) {
  return (
    <ul>
      {props.animalList.map((animalName) => {
        return animalName.startsWith("L") ? <li key={animalName}>{animalName}</li> : null;
      })}
    </ul>
  );
}

function renderAnimals() {
  const zooAnimals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals:</h1>
      <List animalList={zooAnimals} />
    </div>
  );
}


export default renderAnimals;