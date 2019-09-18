let arr = [1,3,2,5,4];
console.log(arr);   //[ 1, 3, 2, 5, 4 ]
console.log(arr.sort());  //[ 1, 2, 3, 4, 5 ]
console.log(
        arr.sort((a,b)=>{
            if(a>b)
                return -1;
            else
                return 1;
        })
);    //[ 5, 4, 3, 2, 1 ]
