module.exports = function check(str, bracketsConfig) {

  var arrNew = bracketsConfig.map( element => element.join());

  for (var i = 0; i < arrNew.length; i++) {
    var re = new RegExp(i);
    str = str.replace(re/g, '');
  }

  return true ? str.length == 0 : false;

}
  
 
