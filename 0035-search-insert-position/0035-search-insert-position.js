/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // 선형탐색
var searchInsert = function(nums, target) {
    /* 
      모든 인덱스의 값들이 target보다 클 때 
      가장 앞의 인덱스가 결과로 반환되도록 default로 0을 넣는다.
    */
    let idx = 0;
    // 처음부터 배열의 길이까지 탐색하면서
    for(let i = 0; i < nums.length; i++){
    /*
        인덱스의 값과 target이 일치하면 인덱스 반환
        || 인덱스의 값보다 작다면 해당 위치로 인덱스가 들어가야 하니 마찬가지 i 반환
    */
        if(nums[i] === target || nums[i] > target){
            return i
    // 인덱스의 값이 target보다 작다면 target의 인덱스는 그  뒤인 것이니 idx의 값을 증가시킴
        }else if(nums[i] < target){
            idx = i+1
        }
   }
   // 마지막 조건으로 인해 결정된 target의 인덱스 출력
   return idx
};