function sumOfEven(start, end){
    if(typeof start !=='number'|| typeof end !== 'number'){
        return 'invalid number supplied';
    }
    if(start >=end){
        return 'inavalid number range'
    }


    var sum=0;
    for(var i=start; i<= end; i++){
        if(i%2===0) {
            sum= sum+i
        }
        return sum;
    }

}


    
