module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join('') );

  for (var i = 0; i < arrNew.length; i++) {
    str = str.replace(arrNew[i], '');
    }

  return str.length === 0 ? true : false;

}
  
 
