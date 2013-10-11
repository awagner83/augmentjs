// Generated by CoffeeScript 1.6.3
/*
	-------------------------------------------------------------------------
		AUGMENTR
	-------------------------------------------------------------------------
		The idea for this little library came from Douglas Crockford's book, 
		"JavaScript: The good parts.". The idea is to provide enhancements to
		the primitive JavaScript data types in a non-destructive way.
*/


/* 
	Function.prototype.method
-------------------------------------------------------------------------
	Allows user to create new methods on primitive types without
	overriding default implementations if present.
	@param {String}name
	@param {Function}func
	@return {Function}
*/


(function() {
  var __slice = [].slice;

  if (!Function.prototype.method) {
    Function.prototype.method = function(name, func) {
      if (!this.prototype[name]) {
        this.prototype[name] = func;
      }
      return this;
    };
  }

  /*
  	String.prototype.join
  -------------------------------------------------------------------------	
  	Join n number of Strings to a String. Accepts any number
  	of arguments. More memory efficient that "+" String concatenation.
     Usage: "one".join("two", "three"); => "onetwothree"
  	@param {String[]...}
  	@return {String}
  */


  String.method('join', function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return [this].concat(args).join('');
  });

  /*
  	String.prototype.trim
  -------------------------------------------------------------------------	
  	Removes the leading and trailing whitespace from a String.
     Usage: " foobar  ".trim() => "foobar"
  	@return {String}
  */


  String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
  });

  /*
  	String.prototype.reverse
  -------------------------------------------------------------------------
  	Reverses the character order in a String.
     Usage: "foobar".reverse() => "raboof"
  	@return {String}
  */


  String.method('reverse', function() {
    return this.split().reverse().join('');
  });

  /*
  	Function.prototype.curry
  -------------------------------------------------------------------------
  	Provides a curried method for the given Function. Idea from 
  	Stoyan Stefanov's book "JavaScript Design Patterns".
     Usage: 
        var add = function(x, y){ return x + y; }; 
        var add10 = add.curry(10);
        add10(5) => 15
  	@param {Function} fn
  	@return {Function}
  */


  Function.method('curry', function() {
    var stored_args;
    stored_args = Array.prototype.slice.call(arguments, 0);
    return function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.apply(null, stored_args.concat(args));
    };
  });

}).call(this);
