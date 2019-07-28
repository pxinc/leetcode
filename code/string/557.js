// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，
// 同时仍保留空格和单词的初始顺序。
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"

// export default (str) => {
//   return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }

// export default (str) => {
//   return str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
// }

// export default (str) => {
//   return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
// }

export default (str) => {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
