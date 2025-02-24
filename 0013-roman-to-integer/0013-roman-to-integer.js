/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === "I" && s[i+1] === "V"){
            answer+= 4
            i++
            continue;
        }else if(s[i] === "I" && s[i+1] === "X"){
            answer+=9
            i++
            continue;
        }else if(s[i] === "I"){
            answer++
            continue;
        }
        
        if(s[i] === "X" && s[i+1] === "L"){
            answer += 40
            i++
            continue;
        }else if(s[i] === "X" && s[i+1] === "C"){
            answer += 90
            i++
            continue;
        }else if(s[i] === "X"){
            answer += 10
            continue;
        }

        if(s[i] === "C" && s[i+1] === "D"){
            answer += 400
            i++
            continue;
        }else if(s[i] === "C" && s[i+1] === "M"){
            answer += 900
            i++
            continue;
        }else if(s[i] === "C"){
            answer += 100
            continue;
        }

        if(s[i] === "V"){
            answer += 5
            continue;
        }
        if(s[i] === "L"){
            answer += 50
            continue;
        }
        if(s[i] === "D"){
            answer += 500
            continue;
        }
        if(s[i] === "M"){
            answer += 1000
            continue;
        }
    }
    return answer
};
