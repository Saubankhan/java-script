//function
var name='john';

function first(){
    var a='Hello!';
    Second()
    var x=a+name;
    console.log(x); 
}
function Second(){
    var b='Hi!';
    third()
    var y=b+name;
    console.log(y); 
}
function third(){
    var c='Hey!';
    var z=c+name;
    console.log(z); 
}
first();


// // immediately calling a function
(function name(){
    console.log("function is called immediately"); 
})()

function sample() {
    console.log("called sample function");
}
sample();

//scope
var teacher = "Salman";
function otherClass () {
    teacher = "Tajammul";
    topic = "JS"
    console.log("welcome",topic); 
}
otherClass();

//array
var arrayList=['sauban','khan','saqlain','aqib'];
console.log(arrayList.length);
console.log(arrayList[0]);


var array=["sauban", "khan", "rahmani", "reza","kauser"];
console.log("array elements are:");
function names(){
    for(i=0;i<array.length;i++)
        console.log(array[i]);
    }
    names()

    var arrayList = ['🍫', '😋', '🍦', '😋'];
    console.log(arrayList.length)
    console.log(arrayList[1])


    var array=[1,2,3,4,5,6,7,8];
    function numbers(){
        for(j=0;j<array.length;j++)
        console.log(array[j]);
    }
    numbers()


 //array properties
    var array=[1,2,3,4,5,6]
    array.push(7,8);
    console.log(array);
    array.pop();
    console.log(array);
    array.shift();
    console.log(array);
    array.unshift(9);
    console.log(array);

//coercion
    var value1 = '5';
    var value2 = 9;
    // var sum = Number(value1) + (value2);
    var sum = value1 + value2;
    console.log(sum);

//concatenation
    var msg1 = "There are ";
    var numOfStudents = 50;
    var msg2 = " students in class";
    console.log(msg1 + numOfStudents +  msg2);


    //function hoisting
     myAge(1998);
   function myAge(year) { 
	console.log(2020 - year);
   }

   //variable Hoisting
    var age = 22;
     console.log('hmmm',age);
   

//Hoisting is JavaScript's default behavior of moving declarations to the top.
     function hoist() {
        a = 20;
    //    var b = 100;
      }
      hoist();
    //   console.log(a); //output 20
    //   console.log(b); //output b is not defined

      //function scoped 
// function fun(){ 
//     var name; 
//     console.log(name); //undefined
//     name = 'Mukul Latiyan'; 
// } 
// fun(); // undefined 


      function fun(){ 
        var name = 'sauban khan'; 
        console.log(name); 
    } 
    fun(); 


    