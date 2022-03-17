var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var result = obj2==obj1;
console.log(result);
//output:false
var result1 = obj2===obj1;
console.log(result1); 
//output: False

var any = (a,b)=>{
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);
    let flag = false;

    if(keys1.length == keys2.length)
    for( var key in a){
        if(a[key] == b[key])
        flag = true;
        else{
            flag= false;
            break;
        }
    }
    return flag;
}

console.log(any(obj1,obj2));
//output: True
/*expected output is: false
                      false
                      true*/
                      
