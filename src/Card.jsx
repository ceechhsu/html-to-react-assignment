function Card(props) {
  const character = props.character;
  return (
    <section id="character-cards">
      {character.map((eachCharacter) => (
        <div class="card">
          <div class="card-titles">
            <h3>{eachCharacter.name}</h3>
            <h4>{eachCharacter.nickName}</h4>
          </div>
          <img src={eachCharacter.imageUrl} alt={eachCharacter.name} />
          <p>{eachCharacter.background}</p>
        </div>
      ))}
    </section>
  );
}

export default Card;
