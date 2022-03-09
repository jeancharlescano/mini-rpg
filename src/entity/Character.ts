export class Character {
    life: number = 3;
    level: number = 1;
    isAlive: boolean = true;

    attack(target: Character) {
        if (target.isAlive == true) {
            target.life = target.life - this.canFullAttack(target.life);
        }
        if (target.life <= 0) {
            target.isAlive = false;
            this.level = this.level + 1;
        }
    };
    
    canFullAttack(targetLife: number) {
        console.log("🚀 ~ file: Character.ts ~ line 17 ~ Character ~ canFullAttack ~ targetLife", targetLife)
        let hit: number = 0
        if (this.level < targetLife ) {
            hit = this.level
        }
        if (this.level > targetLife) {
            hit = this.level - targetLife
        }
        
        console.log("🚀 ~ file: Character.ts ~ line 27 ~ Character ~ canFullAttack ~ hit", hit)
        return hit;
    };
}

