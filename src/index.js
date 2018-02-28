module.exports = function check(str, bracketsConfig) {
   str = str.split('');
   var open = 0;
   var close = 0;
   var openclose = 0;
   for (var i=0; i<str.length; i++ ) {
      if (str[i]==('['|| '(' || '1' || '3' || '5' ||'{')) {
        open++
      }
      if (str[i]==(']'|| ')' || '2' || '4' || '6' || '}')) {
        close++
      }
      if (str[i]==('7'|| '8' || '|' || '' )) {
        openclose++
      }
   }

   if ((open == close) && (openclose % 2 == 0) && (str.length % 2 == 0)) {
     return true;
   }
   else {
     return false;
   }
   }
