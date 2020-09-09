//FREQUENCY COUNTER
//
//write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 


//////////////////////////////////////////////
///////// **********  O(n²) naive, slower, more expensive ********** ///////
/////////////////////////////////////////////

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){ //arr1[1] === 2
//         let correctIndex = arr2.indexOf(arr1[i] ** 2) //2 //iterate all the element in the arr1 so it takes longer to look for the element. It is also nested so it becomes O(n ² sq 2)
//         //console.log(i)
//         //console.log(3 ** 2)
//         //console.log(correctIndex)
//         if(correctIndex === -1) { //if it doesn't exist
//           return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1) //
//     }
//     return true;
// }
//same([1,2,3,2], [9,1,4,4])


// const same = (arr1, arr2) => {
//   if(arr1.length !== arr2.length){
//     return false
//   }
//   for (let i = 0 ; i < arr2.length; i++){
//     let currentIdx = arr2.indexOf(arr1[i] ** 2) 
//     if (currentIdx === -1){
//       return false
//     }
//     arr2.splice(currentIdx, 1)
//   }
//   return true
// }





//////////////////////////////////////////////
///////// **********  O(n) ********** ///////
/////////////////////////////////////////////

//two separate loops are better than nested loops. 

//const same = (arr1, arr2) => {
//   if(arr1.length !== arr2.length){
//     return false
//   }

//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}

//   for(let val of arr1){
//     //console.log("val", val)
//     // console.log("frequencyCounter1[val]", frequencyCounter1[val])
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
//     //console.log("frequencyCounter1[val] AFTER",frequencyCounter1[val])
//   }
//   console.log("::arr1::", frequencyCounter1)


//   for(let val of arr2){
//   frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
//   }
//   console.log("::arr2::",frequencyCounter2)

//   for (let key in frequencyCounter1){
//     if(!(key ** 2 in frequencyCounter2)){
//       return false
//     }
//     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//       return false
//     }
//   }
//   return true
// }
// same([1,2,3,2], [9,1,4,4])


//////////////////////////////////////////////
///////// **********  O(n) ********** ///////
/////////////////////////////////////////////
const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false
  }

  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let val of arr1){
    freqCounter1[val] = (freqCounter1[val] || 0 ) + 1
  }

  for (let val of arr2){
    freqCounter2[val] = (freqCounter2[val] || 0 ) + 1
  }
  console.log("::1::", freqCounter1)
  console.log("::2::", freqCounter2)

  //freqCounter1 key ** 2 === freqCounter2 key
  //then vals are the same

  for (let key in freqCounter1){ //1,2,3
    //console.log(key)
    //console.log("***", (key in freqCounter2)) //true or false
    //1. check key 
    if( !(key ** 2 in freqCounter2) ){
      return false
    }
    //2. check values are the same
    if( freqCounter2[key ** 2] !== freqCounter1[key]){
      return false
    }
  }
  return true
}
 
same([1,2,3,2], [9,1,4,4])

