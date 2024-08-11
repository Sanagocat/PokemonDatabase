
const monsterInfoUrl = "https://pokemon-database-backend.vercel.app/name";

const searchButton = document.getElementById("searchButton");
const searchName = document.getElementById("searchName");
const pokemonName = document.getElementById("pokemonName");
const HP = document.getElementById("HP");
const ATK = document.getElementById("ATK");
const DEF = document.getElementById("DEF");
const SPATK = document.getElementById("SPATK");
const SPDEF = document.getElementById("SPDEF");
const SPD = document.getElementById("SPD");


searchButton.addEventListener("click",searchPokemon);

async function searchPokemon(){
  //1. get user input text from searchName Textbox
  //2. get monster Info using "getMonsterInfo"
  //3. update 'pokemonName' text-content to user input Name
  console.log(searchName.value);
  pokemonName.innerText = (searchName.value);

  //4. Get Monster Info from Server (Backend) and Update!
  getMonsterInfo(searchName.value);
}

async function getMonsterInfo(monsterName){  
  const response = await fetch(monsterInfoUrl+"?name="+monsterName);
  const data = await response.json();
  console.log(data);

  if (data["response_code"] == 0){ //Data Get FAIL
    console.log("ERROR");
    pokemonName.innerText= "CANNOT FIND MONSTER INFO";
    pokemonImage.src = "unknown.jpeg";
  }
  else{ //Data Get SUCCESS

    //1. parse monsterInfo and, Get Monster Image URL
    console.log(data["ImageURL"]);
    pokemonImage.src = data["ImageURL"];

    //2. Update each Pokemon Infomation
    HP.textContent = "HP : "+data["HP"];
    ATK.textContent = "ATTACK : "+data["Attack"];
    DEF.textContent = "DEFENSE : "+data["Defense"];
    SPATK.textContent = "SPECIAL ATTACK : "+data["SpecialAttack"];
    SPDEF.textContent = "SPECIAL DEFENSE : "+data["SpecialDefense"];
    SPD.textContent = "SPEED : "+data["Speed"];
  }
}
