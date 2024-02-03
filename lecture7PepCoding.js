// // aero function no need to write function key word
// let aero = x => x*x;
// console.log(aero(4));

// //IIFY
// (function IIFY()
// {
//     console.log("hello");
// })();

// // function expression 
// let exp= function exp()
// {
//     console.log("hello good morning exp");
// }
// exp();

// var Varname = 10
// function fn(){
//     console.log(Varname);
//     Varname = 20;
//     console.log(Varname);
// }
// fn();

/////good question to understand memory and function excution
            // console.log("L1",varName);
            // var varName = 10;

            // function b(){
            //     console.log("L5",varName);
            // }
            // console.log("L7",varName);

            // function fn(){
            //     console.log("L10",varName);
            //     var varName = 20;
            //     b();
            //     console.log("L13",varName);
            // }
            
            // fn();
            // console.log("L41",varName);



//var vs let vs const

    // var -> reassign,redeclare, hoisting,
        // console.log(varName);
        // var varName = 10
        // console.log(varName);//10
        // //reassign 
        // varName = 20;
        // console.log(varName);//20
        // //redeclare
        // var varName=30;
        // console.log(varName);//30
        // var varName;
        // console.log(varName);// 30


// var with function

        // var a=20;
        // function fn()
        // {
        //     var a=10;
        //     if(a)
        //     {
        //         var a=30;
        //     }

        //     console.log(a);
        // }

        // console.log(a);
        // fn();

        // console.log(a);



//let and const

// TDZ-> let and const me hota hai....var ke case me if we are printing any varaible that it will be undefined.
        // console.log("Hello");
        // console.log(a);
        // let a=19;
        // console.log(a);
        // a=23;
        // console.log(a);
        // //let a=29;// error already declared... 
        // console.log(a);
//const
    //    const a=12;
    //    console.log(a);
       //no reassignment and no redeclaration


// let fruit = "apple"
//     function fn()
//     {
//         //console.log(fruit);//TDZ because of let->fruit and we are using before declaration
//         let fruit = "Banana";
//         console.log(fruit);
//     }
//     console.log(fruit);
//     fn();

        // let fruit = "apple";
        // console.log(fruit)
        // function fn()
        // {
        //     fruit = "banana";
        //     {
        //     console.log(fruit);// block scope bahar ki or banana
        //     }
        // }
        // fn();

//variable shodowing
        // let fruit = "apple";
        // console.log(fruit)
        // function fn()
        // {
        //     let fruit = "banana";// fruit apple shadowing ho gya same case const me bhi..
        //     {
        //     console.log(fruit);
        //     }
        // }
        // fn();


        //*****-----/ redeclaration in block --****
        //var fruit ="apple" bhi chalegaaa --> bahar var chalega --> bahar let and andar var illegal hoga-> redeclare hi nhi ho payega errorr
        // const fruit = "apple";
        // console.log(fruit)
        // function fn()
        // {
        //     const fruit = "banana";// fruit apple shadowing ho gya same case const me bhi..
        //     {
        //     console.log(fruit);
        //     }
        // }
        // fn();


// //Table
// key_word     scope     reassign     redeclare     TDZ
// var          function   yes            yes        no
// let          block      yes            no          yes
// const        block      no             no          yes
