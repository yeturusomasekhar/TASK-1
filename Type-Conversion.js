
//using Implicit Type Conversion

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log(true + 1);
console.log(false + "1");


console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));
console.log(Boolean(""));
console.log(Boolean("hello"));


1. Explain difference between == and ===
    == (Loose Equality)
    Compares values
    If types are different, JavaScript converts the type automatically

    === (Strict Equality)
    Compares value and type

No type conversion

==   → compares values (type conversion happens)
===  → compares value + type (no conversion)

2. Explain difference between a++ and ++a
    Both are increment operators. They increase the value by 1, 
    but the order of operation is different.

| Operator | Name           | Behavior                           |
| -------- | -------------- | ---------------------------------- |
| `a++`    | Post Increment | Use the value first, then increase |
| `++a`    | Pre Increment  | Increase first, then use the value |

a++ (Post Increment)

    The current value is used first .Then the value is increased by 1

++a (Pre Increment)

    The value is increased first.Then the new value is used.

  3. Falsy Values in JavaScript
           Falsy values are values that become false when converted to Boolean.  

    Falsy Value  Description                        
    Falsy Value	      Description
    false	Boolean       false
       0	Number        zero
      -0	Negative      zero
       0n	BigInt          zero
        ""	Empty            string
    null	No            value
    undefined	        Variable declared but not assigned
    NaN	                 Not a Number


4. Explain why "5" - 2 works but "5" + 2 behaves differently

"5" - 2 → numeric operation → 3
"5" + 2 → string concatenation → "52".

The + operator is used for both addition and string concatenation.
The - operator only works with numbers, so JavaScript automatically converts the string

| Operator | Behavior                                                   |
| -------- | ---------------------------------------------------------- |
| `-`      | Converts values to numbers                                 |
| `+`      | Performs **string concatenation** if one value is a string |



5.Explain why null == undefined is true

In JavaScript, the loose equality operator (==) performs type coercion (automatic type conversion).
null == undefined → true 

This is a special rule in JavaScript where null and undefined are considered equal when using ==.