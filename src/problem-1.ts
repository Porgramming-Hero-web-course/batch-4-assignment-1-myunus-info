// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

{
  type SumArray = (numsArr: number[]) => number;

  const sumArray: SumArray = numsArr => {
    let sum: number = 0;
    for (const num of numsArr) {
      sum += num;
    }
    return sum;
  };
}
