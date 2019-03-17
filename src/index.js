module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join('') );

  for (var i = 0; i < arrNew.length; i++) {
    var el = arrNew[i];
    var re = new RegExp(el, 'g');
    var newStr = str.replace(re, '');
    }

    if (newStr.search(re) == -1) break;
  }

  return str.length === 0 ? true : false;

}
  
 
