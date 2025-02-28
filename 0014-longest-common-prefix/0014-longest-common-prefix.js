/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = ""
    let arr = strs[0].split("")
    for(let i = 0; i < arr.length; i++){
        let str = arr.slice(0,i+1).join("")
        if(strs.filter((e)=>e.includes(str)).length === strs.length){
            answer = str
        }
    }
    return answer
};