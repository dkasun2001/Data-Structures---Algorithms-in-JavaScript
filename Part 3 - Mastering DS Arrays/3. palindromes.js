/* const reverseString = (str) => {
  const oldStr = str.toLowerCase();
  const newStr = oldStr.split("").reverse().join("");

  console.log(`Old String: ${oldStr}`);
  console.log(`New String: ${newStr}`);
  if (oldStr === newStr) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
};

reverseString("cDDc");
 */

const palindrome = (str) => str.split("").reverse().join("") === str;
console.log(palindrome("cddc"));
