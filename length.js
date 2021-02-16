//system-1
var str = 'somthing string'

var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }
    else{
        length++
    }
}
console.log(length)


//system-2
var length2 = str.length
console.log(length2)