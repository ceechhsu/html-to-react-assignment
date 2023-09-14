function Card(props) {
  const characters = props.characters;
  return (
    <section id="character-cards">
      {characters.map((eachCharacter, index) => (
        <div className="card" key={index}>
          <div className="card-titles">
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
