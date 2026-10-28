type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    const result = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
    return result;
}

const roll = rollDice();

console.log(`주사위 던진 결과는 ${roll}`);