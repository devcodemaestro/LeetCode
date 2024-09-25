/**
 * @param {number[]} nums
 * @return {number}
 */
 // 선형탐색
var missingNumber = function(nums) {
    // nums를 오름차순으로 정렬
    nums.sort((a,b)=>(b-a))
    /*
        배열nums 내에는 0부터 배열의 길이 갯수 숫자 n까지의 숫자가 들어있다.
        배열의 최대 길이와 최대 인덱스는 1 차이가 있다.
        즉 하나의 숫자는 무조건 누락된다.
    */
    for(let i = 0; i <= nums.length; i++){
    // 배열을 탐색하면서 i가 index에 없다는 -1 결과값이 반환되면 i를 반환한다.
        if((nums.indexOf(i)) === -1){
            return i
        }
    }
};