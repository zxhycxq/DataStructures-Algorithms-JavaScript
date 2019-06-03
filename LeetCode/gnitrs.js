/**
 * 反转字符串
 * 六月
 */

/*
var reverseWords = function(s) {
  // 空格分隔
  let arr=s.split(' ')
  //反转字符串
  let result=arr.map(Item =>{
    return Item.split('').reverse().join('')
  })
  console.log(`%c--result-- `, 'color:blue;', result)
  return result.join(' ')
};
*/
var reverseWords = function(s) {
    return s.split(' ').map(Item =>{
      return Item.split('').reverse().join('')
    }).join(' ')
}
