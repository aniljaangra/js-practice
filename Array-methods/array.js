var a = [{ num : 1 } , { num : 3 } , { num : 5 } , { num : 7 } , { num : 8 }];
var newArray=[];
a.forEach(function(item,index) {
var newItem={num : item.num ,isEven:item.num % 2==0?true:false};
    console.log(newItem,index);
newArray.push(newItem);
});
console.log("modified array ",newArray);


/*forEach
consider following array
var numCollection = [ { num : 1 } , { num : 3 } , { num : 5 } , { num : 7 } , { num : 8 } ]
write a piece of code which will check for each object if the num property is even it will add a property isEven to object with value true otherwise false.

output should look like

 [ { num : 1 , isEven : false } , { num : 3  , isEven : false} , { num : 4  , isEven : true} , { num : 7  , isEven : false} , { num : 8  , isEven : true} ]
*/
