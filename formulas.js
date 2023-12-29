

function getMean(ints){
    let sum = 0;
    for(let number of ints){
        sum+=parseInt(number)
    }
    return sum/ints.length
}

function getMedian(ints){
    
    if(ints.length%2!==0){
        let p = Math.floor((ints.length+1) / 2);
        return parseInt(ints[p-1])
    } else {
        let p = Math.floor(ints.length / 2);
        return (parseInt(ints[p-1]) + parseInt(ints[p])) / 2
    }
}

function getMode(ints){
    let mode = {}
    for (let i=0; i< ints.length; i++){
        if(!mode[ints[i]]) {
            mode[ints[i]] = 0;
        }
        mode[ints[i]] += 1;
    }
    let count = 0;
    let modeInt;
    for(let key in mode){
        if(mode[key]>count){
            modeInt = key;
            count = mode[key];
        }
    }
    return modeInt
   
}

module.exports = {
    getMean,
    getMedian,
    getMode
}