module.exports = function check(str, bracketsConfig) {

  for (var i = 0; i < bracketsConfig.length; i++) {
    if (i[0] = '(') var re = /\(\)/;
    if (i[0] ='{') var re = /\{\}/;
    if (i[0] = '[') var re = /\[\]/;
    if (i[0] = '|') var re = /\|\|/;
    while (str.search(re) != -1) {
      str = str.replace(re, '');
    }

    return str;
    }
    if (str = '') return true;
  }
 
