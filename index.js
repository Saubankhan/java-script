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
    console.log("name is called"); 
})()

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



