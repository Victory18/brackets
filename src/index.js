module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element == element.join('') );

  for (var i = 0; i < arrNew.length; i++) {
    var el = arrNew[i];
    var re = new RegExp(el, 'g');
    str = str.replace(re, '');
    if (str.search(re) == -1) break;
    else str = str.replace(re, '');
  }

  return str.length === 0 ? true : false;

}
  
 
