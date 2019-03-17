module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join('') );

  for (var i = 0; i < arrNew.length; i++) {
    var re = new RegExp('i='+i, 'g');
    str = str.replace(re, '');
    if (str.search(re) == -1) break;
    else str = str.replace(re, '');
  }

  return true ? str.length == 0 : false;

}
  
 
