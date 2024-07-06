/* const intRiverse = (num) => {
  const newNum = num.toString().split("").reverse().join("");
  return parseInt(newNum);
};
console.log(intRiverse(3453));
 */

const reverseInt = n =>{
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed)* Math.sign(n);
}

console.log(reverseInt(-12345));