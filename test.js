function findActive(nums){
  let counts={}
  for(let num of nums){
    counts[num]=(counts[num] || 0)+1
  }
  let n=nums.length
  for(let num in counts){
    if(counts[num]>n/2){
      return num
    }
  }
  return 0
}

function getMaxCouple(nums) {
  let maxSum = -Infinity;
  let maxCouple = "";
  let maxNum = -Infinity;
  let secondMaxNum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      secondMaxNum = maxNum;
      maxNum = nums[i];
    } else if (nums[i] > secondMaxNum) {
      secondMaxNum = nums[i];
    }

    let sum = maxNum + secondMaxNum;
    if (sum > maxSum) {
      maxSum = sum;
      maxCouple = `${maxNum} + ${secondMaxNum}`;
    }
  }

  return maxCouple;
}

console.log(findActive([1,3,4,1,1]))
console.log(getMaxCouple([1, 3, 5, 2, 0, 1, 7]))

