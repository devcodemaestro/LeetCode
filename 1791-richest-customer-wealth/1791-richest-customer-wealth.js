/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    let sum
    for(let i = 0; i < accounts.length; i++){
        sum = 0;
        for(let j = 0; j < accounts[i].length; j++){
            sum = sum + accounts[i][j]
        }
        if (result < sum){
            result = sum
        }
    }
    return result
};