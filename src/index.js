module.exports = function check(str, bracketsConfig = [arr1]) {
  if (arr1.length == 1) {
    var arr2 = [...arr1];
    var countA = 0;
    var countB = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == arr2[0]) countA++;
      if (str[i] == arr[1]) countB++;
    }
    if (countA == countB) return true;
  }
  return true;
}
