/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 1
    let maxCount = 0
    if(s.length === 1){
        return 1
    }

    for(let i = 0; i < s.length-1; i++){
        if(s[i] === s[i+1]){
            count++
        }else if(s[i] !== s[i+1]){
            count = 1
        }
        if(count >= maxCount){
            maxCount = count
        }
    }
    return maxCount
};