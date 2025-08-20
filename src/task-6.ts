function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
  
getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true
getFirstElement([1, "a", true]); // 1
  

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([true, false, true]));
console.log(getFirstElement([1, "a", true]));
  