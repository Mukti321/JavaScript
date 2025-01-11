
<difference between var,let and const>
======================================
 var ,let and const is a keyword to define a declared a variable which define the scope of the varible .
 <var>
 =======
-> <Scope:> Function-scoped (or globally-scoped if outside a function).
-> <Hoisting:> Hoisted to the top of its scope, but initialized as undefined.
-> <Re-declaration:> Can be re-declared within the same scope.
-> <Re-assignment:> Can be reassigned.
-> <Block Scope:> Not block-scoped, so accessible outside block structures (like if or for loops).

 <let>
 =======
-> <Scope:> Block-scoped (limited to the nearest enclosing block {}).
-> <Hoisting:> Hoisted but not initialized, causing a "temporal dead zone" until its declaration.
-> <Re-declaration:> Cannot be re-declared within the same scope.
-> <Re-assignment:> Can be reassigned.

<const>
========
-> <Scope:>  Block-scoped (same as let).
-> <Hoisting:> Hoisted but not initialized, like let, causing a temporal dead zone.
-> <Re-declaration:> Cannot be re-declared within the same scope.
-> <Re-assignment:> Cannot be reassigned after its initial assignment, though object/array properties can be modified.