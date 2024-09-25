/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    /*
        효율성을 위해 길이가 긴 배열을 고정시켜두고
        길이가 짧은 배열을 유동적으로 탐색하면서 공통 값을 찾는다.
    */
    let fixNums
    let checkNums
    if(nums1.length > nums2.length){
        fixNums = nums1
        checkNums = nums2
    }else{
        fixNums = nums2
        checkNums = nums1
    }

    let result = []

    /*
        고정 배열에 유동 배열값의 인덱스가 있는지 체크
        있다면 공통의 값이 있다는 것이다.
        결과배열 result에 유동 배열 값을 추가한다.
    */  
    /*
        이 때 기존에 result 배열에 동일한 값이 있을 수 있으니
        중복여부를 동일한 방식으로 체크 후 추가한다.
    */
    for(let i = 0; i < checkNums.length; i++){
        if(result.indexOf(checkNums[i]) === -1 && fixNums.indexOf(checkNums[i]) !== -1){
            result.push(checkNums[i]);
        }
    }
    return result
};