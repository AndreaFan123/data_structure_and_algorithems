function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);
    if (map.has(complement)) {
      console.log([map.get(complement)!, i]);
    }
  }
}

twoSum([1, 2, 6, 8], 3);
