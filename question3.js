let array=[1,2,3,4,5,6,7,8,9,10]
const primenumbers= array.filter(numbers => {
  for (let i =2 ;i<numbers;i++) {
    while(numbers % i === 0) return false;
  }
  return numbers > 1;
});



console.log(primenumbers)
