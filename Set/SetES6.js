let set=new Set();
set.add(110)
console.log(set.has(110));
console.log(set.values());
console.log(set.size);// es6的size属性

set.delete(110)

let setA=new  Set();
setA.add(123)
setA.add(3)
setA.add(1);

let setB=new  Set();
setB.add(555)
setB.add(666)
setB.add(777)
setB.add(1)
//
let unionAB=new Set();
for(let x of setA){
  unionAB.add(x)
}
for(let x of setB){
  unionAB.add(x)
}
console.log(`unionAB  `,unionAB);
//
let intersection=function (setA,setB) {
  let intersectionSet=new Set();
  
  for(let x of setA){        // of
    if(setB.has(x)){
      intersectionSet.add(x)
    }
  }
  return intersectionSet;
}

//

let intersectionAB=intersection(setA,setB)
console.log(setB);
console.log(setA);
console.log(`jy`,intersectionAB);
