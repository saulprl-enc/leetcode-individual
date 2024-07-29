// Link to problem: https://leetcode.com/problems/permutations/

function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums.slice()];
  }

  const result: Array<Array<number>> = [];

  for (let i = 0; i < nums.length; i++) {
    const firstNumber = nums.shift()!;
    const permutations = permute(nums.slice());

    for (const permutation of permutations) {
      permutation.push(firstNumber);
    }

    result.push(...permutations);
    nums.push(firstNumber);
  }

  return result;
}
