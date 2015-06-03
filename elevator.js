/*jslint node: true */
'use strict';

module.exports = {
  hello : function(argument) {
    return 'hello';
  },
  goto : function(start,end){
    if(typeof start === 'object' || typeof end === 'object' || Number(start) > 3 || Number(start) < 0 || Number(end) > 3 || Number(end) < 0 || Number(start) === Number(end)  || typeof(start)!=="number" || typeof(end)!=='string'){
      return 0;
    } else {
      return Number(end) - Number(start);
    }
  }
};
