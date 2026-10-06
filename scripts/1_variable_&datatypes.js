//1. Variables ;

// programming requires us to store different values in money(RAM)
// While processing almost every tasks.
//rembering the money addresses associated with such values
// is not pratical,
// variables provide identifiers (or variable names)

// in traditional static programming languages,
// we declare a variable using the dadtype of value.
// Eg. let's say we want to store age of a person;>
  // int age; // -> Declartion (mermory allocation)
  // agse = 10;// -> Initialization
  // age = 12; // -> Re-assigment
     // OR
  // int age = 10; // ->Declartion and Initialization together
  // Some variables, one initialized, stays with the same vakue
  // througout the runtime. these are usually configuration values.
  // These are called 'constants'.
  // Their values are frozen.
  // These are usually declared along with keywords to denote their speciality.
  //  Values must be assigned during declartion.
       // const int AGE_LIMIT = 18; -> C++
       // final int AGE_LIMIT - 18; -> Java

// JS was developed as a client-side scripting language meant for web designers.
    // The coders were not very well vered in programmaing conventions and rules.
    // To help them write their logic without being affected by the rules,
    // JS included some features.

// 1.Usage of variables, without declaring datatype - Dynamic tying.
    // The datatype is guessed during runtime based on assigned value rather than 
    // hoping the coder wil denote.
        // var age = 10; ->var keyword denotes a generic variable with no specific type.

// 2.Usage of variable with no declaration; Direct assignment.
        age = 20;
        console.log(age);
    // var age; will be done automatically implicit;
// 3.Automatioc semi-colon insertion
    // In classic programming languages, statements are separeted by different delimiter symbole.
    // Usually its a ',' semi-colon symbol. Even though JS follows the same, some developers tend to forget
    // this. JS automatically inserts the delimiter at the statement end while running to prevent errors.
    console.log("ragul")
    
// 4.Hoisting
    // Not everyone understands how variables and functions need to be declared before calling.
    // For example,
    f1()

    function f1(){
        // logic
    }

    x = 10;
    var x;

    // Doen't seem wrong to some people who are to coding.

    // JS Helps by hoisting the var and function declarations
    // to the top of the script while running.

//  ------------------------------------------------------------------

//  Variable declaration

// 1. const
    // - block scope
    // - frozen value
    //  - cannot be re-declared but can be re-assigned.

// 2. Let
    // - block scope
    // - Value changes during runtime 
    // - cannot be re-declared but can be r-assigned.

// 3. var
    // - Function scope (Unless var is not enclosed in any function, then considered global scope)
    // - value change during runtime 
    // - can be re-declared and re-assigned.

// Preference of usage 

    //  const >>> let >>>>>>>>>> var


// ---

{
    const a = 10;
    let b = 20;
    var c = 30;
}
console.log(a);
console.log(b);
console.log(c);