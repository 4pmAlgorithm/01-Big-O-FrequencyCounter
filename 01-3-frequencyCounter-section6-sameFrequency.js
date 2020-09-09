// Write a function called sameFrequency. Given two numbers, find out if they have same frequency of digis. 

// Time: O(N)

const sameFrequency = (n1, n2) => { //193

    let n1Str = n1.toString()
    let n2Str = n2.toString()
    console.log(n1Str)
    console.log("hello")
  
    console.log(n2)
  
    // if(n1Str.length !== n2Str.length){
    //   return false
    // }
  
    let counterObj1 = {}
    let counterObj2 = {}
  
    for(let i = 0; i < n1Str.length; i++){
      let n1EachNum = n1Str[i] //1, //9, //3
      counterObj1[n1EachNum] = (counterObj1[n1EachNum] || 0 ) + 1  
    }
  
    console.log("::1::", counterObj1)
  
    for(let i = 0; i < n2Str.length; i++){ //243
      let n2EachNum = n2Str[i] //2, //4, //3
      counterObj2[n2EachNum] = (counterObj2[n2EachNum] || 0 ) + 1
    }
    console.log("::2::", counterObj2)
  
    for (let key in counterObj1 ){ //iterate counter1 key
      //1. check key
      if(!(key in counterObj2)) { //check all the keys in counterObj2
      return false
      }
  
      //2. check values
      if(counterObj1[key] !== counterObj2[key]){
        return false
      }
    }
    return true
  }
  
  sameFrequency(182, 281) //true
  //sameFrequency(193, 243)
  
  