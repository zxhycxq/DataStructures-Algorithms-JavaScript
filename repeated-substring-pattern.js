/*
* 重复的子字符串 - 力扣（LeetCode）  https://leetcode-cn.com/problems/repeated-substring-pattern/
*
* */
var repeatedSubstringPattern = function(str) {
    var reg=/^(\w+)\1+&/
    return reg.test(str)
};
