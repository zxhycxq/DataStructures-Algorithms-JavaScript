/**
 * 按奇偶排序数组 II - 力扣（LeetCode）  https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * 六月
 */
var sortArrayByParityII = function (arr) {
  if (arr.length < 2 || arr.length > 20000) {
    return
  }
  arr.sort ((a, b) => a - b)
  
  let r = []
  let odd = 1, even = 0;
  arr.map ((item) => {
    if (item >= 0 && item <= 1000) {
      if (item % 2 === 1) {
        r[odd] = item
        odd += 2
      } else {
        r[even] = item
        even += 2
      }
    } else {
      return
    }
  })
  return r
};
