// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

{
  type RemoveDuplicates = (numsArr: number[]) => number[];

  const removeDuplicates: RemoveDuplicates = numsArr => {
    return numsArr.reduce((accumulatedArr: number[], currEl: number) => {
      if (!accumulatedArr.includes(currEl)) {
        accumulatedArr.push(currEl);
      }
      return accumulatedArr;
    }, []);
  };
}
