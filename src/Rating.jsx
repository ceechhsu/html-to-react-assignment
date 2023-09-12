function Rating(props) {
  const top_characters_title = "Top Characters";
  const top_row = ["Name", "Skillset", "Votes"];

  const character = props.character;
  const top5Characters = character
    .slice() // Create a shallow copy of the array
    .sort((a, b) => b.votes - a.votes) // Sort by votes in descending order
    .slice(0, 5); // Get the top 5 items

  return (
    <section id="character-ratings">
      <h4>{top_characters_title}</h4>
      <table>
        <tr>
          {top_row.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
        {top5Characters.map((eachCharacter, index) => {
          const isEven = index % 2 === 0;
          return (
            <tr key={index} className={isEven ? "light" : "dark"}>
              <td>{eachCharacter.name}</td>
              <td>{eachCharacter.skillset.join(", ")}</td>
              <td>{eachCharacter.votes}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}

export default Rating;
