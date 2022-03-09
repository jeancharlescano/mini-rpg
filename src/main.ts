import { Character } from "./entity/Character";
import CharacterGenerator from "./utilities/character.generator";

let characterGen = new CharacterGenerator();
let characters = characterGen.Generator(3);
console.log("🚀 ~ file: main.ts ~ line 6 ~ character1", characters[0]);
console.log("🚀 ~ file: main.ts ~ line 6 ~ character1", characters[1]);
console.log("🚀 ~ file: main.ts ~ line 6 ~ character1", characters[2]);

characters[0].attack(characters[1]);
console.log(characters[1].life);
characters[0].attack(characters[1]);
console.log(characters[1].life);
characters[0].attack(characters[1]);
console.log(characters[1].life);

console.log("character 0 is level ", characters[0].level);

characters[0].attack(characters[2]);
console.log(characters[2].life);
characters[0].attack(characters[2]);
console.log(characters[2].life);
characters[0].attack(characters[2]);
console.log(characters[2].life);

console.log("character 0 is level ", characters[0].level);
