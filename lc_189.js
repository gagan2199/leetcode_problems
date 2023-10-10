function rotate(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
};

nums = [1,2,3,4,5,6,7], k = 3;
nums2 = [1,0,3,4,5,6,7,0,0,6], l = 3;

rotate(nums,k);
rotate(nums2,l);