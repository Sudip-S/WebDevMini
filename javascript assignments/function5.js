function factorial(n){
    let answer=1;

    if(n==0 || n==1){
return answer;
    }

    else if(n>1){
        for(var i=n; i>=1; i--){
            answer= answer*i;
        }
        return answer;
    }

    else{
        return "The number should be positive.";
    }
}

let result=factorial(-1);
document.write(result);