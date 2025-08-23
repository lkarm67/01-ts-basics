function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
  
getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true
getFirstElement<number | string | boolean>([1, "a", true]); // 1
  

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));
console.log(getFirstElement<number | string | boolean>([1, "a", true]));
  