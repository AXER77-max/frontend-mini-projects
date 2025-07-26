async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    // Set image
    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("pokemonSprite");
    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";

    // Set name
    document.getElementById("pokemonDisplayName").textContent = data.name.toUpperCase();

    // Set types
    const types = data.types.map(typeInfo => typeInfo.type.name).join(", ");
    document.getElementById("pokemonTypes").textContent = types;

    // Set abilities
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(", ");
    document.getElementById("pokemonAbilities").textContent = abilities;
    
  } catch (error) {
    console.error(error);
    document.getElementById("pokemonDisplayName").textContent = "Not Found!";
    document.getElementById("pokemonSprite").style.display = "none";
    document.getElementById("pokemonTypes").textContent = "";
    document.getElementById("pokemonAbilities").textContent = "";
  }
}
