function createNumbers( _beginning,_end){
    const results = [];
    let i = _beginning;

    while(i <=_end ){
        results.push(i);
        i++;
    }
    return results;
}
console.log(createNumbers(4,7));