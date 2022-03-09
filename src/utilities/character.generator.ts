import { Character } from "../entity/Character";

class CharacterGenerator {
    Generator = (number: number) => {
        let characters : Character[] = []
        for (let index = 0; index < number; index++) {
            const character = new Character();
            characters.push(character)
        }
    return characters
    };
}

export default CharacterGenerator;