/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let idx = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            return false
        }
        if(arr[i] < arr[i+1] && arr[i-1] > arr[i]){
            return false
        }
        if(arr.length <= 2){
            return false
        }
        if(arr[arr.length-1] > arr[arr.length-2]){
            return false
        }
        if(arr[0] > arr[1]){
            return false
        }
    }
    return true
};