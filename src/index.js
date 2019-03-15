module.exports = function check(str, bracketsConfig) {

  for (var i = 0; i < bracketsConfig.length; i++) {
    if (i[0] = '(') var re = /\(\)/;
    if (i[0] ='{') var re = /\{\}/;
    if (i[0] = '[') var re = /\[\]/;
    if (i[0] = '|') var re = /\|\|/;
  } do {
      str = str.replace(re, '');
    } while (str.search(re) == true); 
    
    return str;
  }
 
