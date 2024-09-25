/**
 * @param {number} x
 * @return {number}
 */
    //선형 탐색
var mySqrt = function(x) {
    // x가 0부터 시작할 수 있기 때문에 0일 때 0을 출력하는 조건을 먼저 넣는다.
    if(x === 0){
        return 0
    }
    // x의 값이 음수인 경우 정수로 바꿔준다.
    if(x < 0){
        x = x * -1
    }
    //  1부터 1씩 증가하면서 탐색한다. 
    for(let i = 1; i <= x; i++){
    //  제곱과 일치한다면 i가 제곱근이므로 반환한다.
        if((i*i) === x) {
            return i
        }
    /* 
        나머지를 제외한 가장 가까운 정수 값만 출력하는 조건이기 때문에
        제곱근은 x보다 클 수 없다.
        따라서 x보다 큰 값이 나온다면 그 직전의 정수를 반환한다.
    */
        if((i*i) > x){
            return i-1
        }
    }
    
};