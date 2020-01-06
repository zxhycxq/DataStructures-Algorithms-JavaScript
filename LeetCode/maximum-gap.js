/**
 * 最大间距 - 力扣（LeetCode）  https://leetcode-cn.com/problems/maximum-gap/
 * 六月
 */
function sortJudge(a,b) {
  return b-a
}

var maximumGap = function(nums) {
  if(nums.length<2){
    return 0
  }
  
  let max=0
  for(let i=0,len=nums.length-1,tmp;i<len;i++){
    tmp = nums[i+1]-nums[i]
    console.log(`%c--tmp-- `, 'color:blue;', tmp)
    if(tmp>max){
       max = tmp
    }
  }
  return max
};
