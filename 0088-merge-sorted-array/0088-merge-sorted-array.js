/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let length = m + n;
    let idx = 0;
    for(let i = m; i < length; i++){
        nums1[i] = nums2[idx]
        idx++
    }
    nums1.sort((a,b)=>(a-b))
};