/*jslint node: true */
'use strict';

module.exports = {
  hello : function(argument) {
    return 'hello';
  }
  goto : function(start,end){
    if(typeof start === 'object' || typeof end === 'object' || start > 3 || start < 0 || end > 3 || end < 0 || start === end){
      return 0;
    } else {
      return Number(end) - Number(start);
    }
  }

};
