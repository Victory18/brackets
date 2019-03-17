module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join('') );

  for (var i = 0; i < arrNew.length; i++) {
    var re = new RegExp(i);
    str = str.replace(re/g, '');
    if (str.search(re) == -1) break;
    else str = str.replace(re, '');
  }

  return str.length === 0 ? true : false;

}
  
 
