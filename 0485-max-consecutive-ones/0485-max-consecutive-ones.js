/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for(let i = 0 ; i <= nums.length; i++){
        if(nums[i] === 1){
            count++
        }else{
            count = 0;
        }
        if(maxCount < count){
            maxCount = count
        }
    }
    return maxCount    
};