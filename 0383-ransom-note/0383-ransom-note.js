/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr1 = ransomNote.split("")
    let arr2 = magazine.split("")

    while(arr1.length !== 0 && arr2.length !== 0){
        if(arr2.includes(arr1[0])){
            arr2.splice(arr2.indexOf(arr1[0]),1)
            arr1.shift()
        }else{
            arr2.pop()
        }
    }
    if(arr2.length === 0 && arr1.length === 0){
        return true
    }else if(arr2.length === 0){
        return false
    }
    return true
};