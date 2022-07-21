//1. Write a function that takes a string and a number and then gives the nth character that string.
function charfunction($string, $val){
    // let $arr = $string.split("")
    // let $specarr = $arr[$val - 1]
    // document.getElementById("s1").innerHTML = $specarr

    let result = $string.charAt($val - 1)
    document.getElementById("s1").innerHTML = result;

}
charfunction("JavaScript",5)

//2. Write a function to compare two numbers: Must be of equal value and type
function compareFunction(x,y){
    if( x === y){
        return true
    }else{
        return false
    }
}

document.getElementById("s2").innerHTML = compareFunction(81,"81")

//3. Addition of two numbers
function addFunction(val1,val2){
    let $result = val1 + val2;
    document.getElementById("s3").innerHTML = $result

}

addFunction(24,32)

//4. A funtion to return the type of a value
function typeFunction(value){
    let $result = typeof(value)
    document.getElementById("s4").innerHTML = $result
}

typeFunction(["a","b",90])

// 5. A function that retuns the first three characters in a string
function retThreeFunction(x){
    let $result;
    $result = x.slice(0,3)
    document.getElementById("s5").innerHTML = $result
}

retThreeFunction("Nigeria")

//6. A function that retuns the last three characters in a string
function retLastThreeFunction(y){
    let $result;
    $result = y.slice(-3,)
    document.getElementById("s6").innerHTML = $result
}

retLastThreeFunction("Nigeria")

//7. A function that return a specified no characters
function myFunction($str,f_index,l_index){
    let $result;
    $result = $str.slice(f_index,l_index)
    document.getElementById("s7").innerHTML = $result
}

myFunction("metropolitant",3,8)  

//8. A function that will return half of an entire string; expected outcome: compe

function halfFunction(str){
    let f_index,l_index,str_len,result,result2;
    str_len = str.length
    f_index = 0;
    l_index = str_len / 2 //5
    result = str.slice(f_index,l_index);

    document.getElementById("s8").innerHTML = result;

    result2 = str.slice(l_index, )
    document.getElementById("s9").innerHTML = result2;

}

halfFunction("abcdefghijklmnopqrstuvwxyz")

//9. A function to check for even number
function evenFunction(x){
    let $result = x % 2
    if($result == 0){
        return true
    }else{
        return false
    }
}

document.getElementById("s10").innerHTML = evenFunction(12)

//10. A function that returns the avarage no in an array
function avgFunction(x){
    let $sum,$arr_length,$result,y;
    $sum = 0;
    for(y of x ){
        $sum += y;
    }
    $arr_length = x.length
    $result =  $sum / $arr_length
    return $result
}
document.getElementById("s11").innerHTML = avgFunction([2,3,4,5,6,7])

