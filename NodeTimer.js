(function(root, factory, undefined) {

    // if AMD loaded
   if(typeof define == 'function' && define.amd) {
       define(factory);
   }
   else {

     var hasModule = (typeof module !== 'undefined' && module.exports); // true is we are in nodeJS env

     if (hasModule) { 
	     module.exports = factory();
     }
     else { // browser env
	     root.NodeTimer = factory();
      }

   }

})(this, function() {

   NodeTimer = function(callback, time) {
      var called = null;
   }


   return NodeTimer;


});