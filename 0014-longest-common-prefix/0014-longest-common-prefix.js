/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = ""
    let str = strs[0].split("")
    for(let i = 0; i < str.length; i++){
        let result = str.slice(0,i+1).join("")
        if(strs.filter((e)=>e.indexOf(result) === 0).length === strs.length){
            answer = result
        }
    }
    return answer
};