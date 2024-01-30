//console.log("Shishir Gupta");
//declare variable
            // let a; //JS tells us it is a variable and it type is in users hand whatever user want, they can assign and by default value is undefined
            // a=26;
            // console.log(a);

// variable type -> premitive types : string, number, boolean, null;

        // loop and conditions are almost same as java
            // let number=10;
            // for(let i=1;i<=number;i++)
            // {
            //     console.log(i);
            // }


// non premitives : arrays, objects and function


//function
        // function sayHi()
        // {
        //     console.log("helllooo");

        // }
        // sayHi();

// function with parameter
        // function sayHi(param)
        // {
        //     console.log(param);
        //     return "we can return anything according to requirment -> number, boolean, string, null";    
        // }
        // sayHi(10);//number
        // sayHi("shishir");//string
        // sayHi([10,34,345,45]);//array

// if we are not passing anything than by default it will be undefined 
        // console.log(sayHi());  // we are printing return value;


//object  ;--> object is nothing but key value pair in JS

            // let obj={
            //     name : "Shishir",
            //     lastName : "Gupta",
            //     address : {
            //         state : "MP",
            //         city : "Khargone",
            //         gaon : "Ghughariya Khedi"
            //     },
            //     age : 25,
            //     friends : ['a','b','c','d']
            // };

            //GET
            // console.log(obj);
            // console.log(obj.name);
            // console.log(obj.friends[3]);

            // SET/UPDATE
            // obj.age=26;
            // console.log(obj);

//square breakate and for each or in loop
        // for(let key in obj)
        // {
        //     console.log(key , " :" , obj[key]);
        // }


//Arrays ->  no specific type is required we can add any element or object in the array;
            let array=[1,2,3,4,5,6,7,8];
            // console.log(array);
            // console.log(array.length);
        
    //push used to insert at last and unshift is used to add at first location 
            // array.push("last element");
            // array.unshift("first location");
            // console.log(array);

    //pop is used to remove last and shift us used to remove first location element
            // array.pop();
            // array.shift();
            // console.log(array);

    //slicing in array
            // let partOfArray = array.slice(2,4);
            // console.log(partOfArray);
    
    // remove from array 
            // array.splice(2,3); // from location to 3 element will delete //it is better version of delete
            // console.log(array);

// indexof and contains/includes

        // Check if the array includes the element 3
        // let result = array.includes(3);
        // console.log(result); // Output: true

// Check if the array includes/contains the element 3 starting from index 2
        //  result = array.includes(3, 4);
        // console.log(result); // Output: false

            
// how contains work in JS 
        // Define a simple collect function
        // function collect(array) {
        //     return {
        //     contains: function (item) {
        //         return array.includes(item);
        //     },
        //     };
        // }
        
        // // Your array
        // let arr = [1, 2, 3];
        
        // // Convert array into a collection
        // const collection = collect(arr);
        
        // // Item to be searched
        // let item = 3;
        
        // // Check if the item exists in the collection
        // let doesContainItem = collection.contains(item);
        
        // // Output the result
        // console.log("Result:", doesContainItem);
        
//-----STRING string string-----
        let singleQuoteString = 'single quote ki string';
        let doubleQuoteString = "double quote ki srting";
        // console.log(singleQuoteString);
        // console.log(doubleQuoteString);
//charAt, substring // all return string not char 

//ascii code method
        // let ascii = singleQuoteString.charCodeAt(2);// ascii value of i 
        // console.log(ascii);

//split methods explore more methods
        // let arrStr = singleQuoteString.split(" ")//space ke basis par if we are passing space
        // console.log(arrStr);
        // let str = arrStr.join('$');
        // console.log(str);


