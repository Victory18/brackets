module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join('') );
    
  function cut () {
    for (var i = 0; i < arrNew.length; i++) {
      do {
        str = str.replace(arrNew[i], '');
      } while (str.indexOf(arrNew[i]) != -1);
    }
     return str;
  }

    return str.length === 0 ? true : cut() || false;
}
  
 
