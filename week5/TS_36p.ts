const fruits: string[] = ["사과", "바나나", "포도", "바나나", "딸기", "수박"];
console.log("처음:", fruits);

fruits[2] = "오렌지";
console.log("수정:", fruits);

fruits.pop();
console.log("pop:", fruits);

fruits.shift();
console.log("shift:", fruits);

fruits.splice(1, 1);
console.log("splice:", fruits);

console.log(fruits.includes("바나나")); 
console.log(fruits.indexOf("바나나")); 
console.log(fruits.lastIndexOf("바나나")); 