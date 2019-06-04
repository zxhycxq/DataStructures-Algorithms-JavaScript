/**
 * Created by cxq on 2019/06/04.
 * 卡牌分组 - 力扣（LeetCode）  https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */
/** todo  [0,0,0,0,0,1,1,2,3,4]
 * @param {number[]} deck
 * @return {boolean}
 */
let hasGroupsSizeX = function (arr) {
  if(arr.length<2){
    return false
  }
  arr.sort ((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  
  for (var i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push (arr[i])
    
    for (let j = i + 1; j < len - 1; j++) {
      
      if (arr[i] === arr[j]) {
        tmp.push (arr[i])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push ([].concat (tmp))
        tmp.length = 0
        i = j
        break
      }
    }
  }
  
  dst.every (Item => {
    if (Item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
};
