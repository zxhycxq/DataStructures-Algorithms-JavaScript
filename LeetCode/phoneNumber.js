/*
电话号码的字母组合 - 力扣（LeetCode）  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*  注意为空和只有一个值的情况
* */

let letterCombinations = function (arr) {
  
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = arr.split ('')
  
  let code = []
  num.forEach (item => {
    if (map[item]) {
      code.push (map[item])
    }
  })
  let comb = (arr) => {
    let tmp = []//临时变量，保存前两个组合的结果
    if(arr ==''){
     return   code
    }else if(arr.length ==1){
      return code.toString().split('')
    }else{
      for (let i = 0, il = arr[0].length; i < il; i++) {
        for (let j = 0, jl = arr[1].length; j < jl; j++) {
          tmp.push (`${arr[0][i]}${arr[1][j]}`)
        }
      }
      arr.splice (0, 2, tmp)
      if (arr.length > 1) {
        comb (arr)
      } else {
        return tmp
      }
      return arr[0]
    }
    
  }
  
  return comb(code)
}

letterCombinations('')
letterCombinations('2')
letterCombinations('23')
