//Question 1 (Very Easy)
min_to_sec = (num) => {
    return num*60
  };
  
  let arr=[5,3,2]
  
  for (i in arr){
    console.log(min_to_sec(arr[i]))
  }


//Question 2 (Very Easy)
dividesEvenly = (num1,num2) => {
    return(num1%num2===0?true:false)
  };
  
  console.log(dividesEvenly(98,7));
  console.log(dividesEvenly(85,4));


//Question 1 (Easy)
test = (a,b) => {
    let count =0;
    for (let i in b){
      a===b[i]?count+=1:null
    } 
    return(count)
  };
  
  console.log(test("a","edabit"));
  console.log(test("c","Chamber of secrets"));


//Question 2 (Easy)
test = (num) => {
    let count =0;
    for (let i=1;i<=num;i++){
      count+=i
    } 
    return(count)
  };
  
  console.log(test(4));
  console.log(test(13));
  console.log(test(600));


//Question 3 (Easy)
  let vowels=[['a',1],['e',2],['i',3],['o',4],['u',5]]

  test = (str1) => {
    str2=""
    for (let i in str1) {
      let flag=0;
      for (j in vowels){
        if (str1[i]===vowels[j][0]) {
              flag=1
              str2+=vowels[j][1]
        } 
      }
      if (flag===0){
        str2+=str1[i]
      }
    
    }
    return str2
  }
  
  console.log(test("karachi"))
  console.log(test("chembur"))



//Question 1 (medium)
test = (str,x) => {
  str1=str.split(' ')
  str2=[]
  for (let i in str1){
    if(str1[i][0]===x){
      c=str1[i].split('').reverse().join('')
      str2.push(c)
    }
    else{
      str2.push(str1[i])
    }
  }
  return (str2.join(" "))
}
console.log(test("word searches are super fun",'s'))
console.log(test("peter piper picked pickled peppers",'p'));



//Question 2 (Medium)
let testJackpot= (arr) => {
  let a =new Set(arr);
  if (a.size>1){
    return false
  }
  else{
    return true
  }
}

console.log(testJackpot (["@", "@", "@", "@"]))
console.log(testJackpot (["abc", "abc", "abc", "abc"])) 
console.log(testJackpot (["SS", "SS", "SS", "SS"]))
console.log(testJackpot (["&&", "&", "&&&", "&&&&"])) 
console.log(testJackpot (["SS", "SS", "SS", "Ss"]))



//Question 3 (Medium)

let removeDups= (arr) => {
  arr1=[]
  let a =new Set(arr);
  for (let i of a){
      arr1.push(i)
  }
  return arr1
}

console.log(removeDups ([1, 0, 1, 0]))  
console.log(removeDups (["The", "big", "cat"])) 
console.log(removeDups (["John", "Taylor", "John"]))



//Question 1 (Hard)
let realType = (data) => {
  if (data===null){
       return "null"
   }
   else if(Array.isArray(data)){
       return "array"
   }
   else{
     return typeof(data)
   }
};

console.log(realType (1)) 
console.log(realType("a")) 
console.log(realType(true)) 
console.log(realType ([])) 
console.log(realType(null))



//Question 2 (Hard)
let exp=/[0-9]+/

let numInStr = (arr) => {
    arr1=[]
    for (let i in arr){
      if (arr[i].match(exp)!==null){
        arr1.push(arr[i])
      }
    }
    return arr1
};


console.log(numInStr (["1a", "a", "2b", "b"]))
console.log(numInStr (["abc", "abc10"])) 
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"])) 
console.log(numInStr (["this is a test", "test1"])) 

















  
