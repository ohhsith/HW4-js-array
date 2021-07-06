 console.log('------------- #4')  
 let ask = (question, yes, no) => confirm(question) ? yes() : no();
 ask ('Вы согласны?', () => console.log('Вы согласились.'), () => console.log('Вы отменили выполнение.'));

  console.log('------------- #5')
  let line = 'my-short-string';
  let arr = line.split('-');
  console.log (arr);

  console.log('------------- #6')
  let arr2 = ['JavaScript', 2015];
  let line2 = arr2.join(' ');
  console.log (line2);

  console.log('------------- #7')
    // function customFind() {
        // let users = [
        //  {id: 1, name: "Vic", age: 21},  
        //  {id: 2, name: "Petya", age: 30}, 
        //  {id: 3, name: "Jon", age: 5}
        // ];
        
        // const userLength = users.length;
        // let result = [];
    
        // for (let i=0; i<userLength; i++) {
        //     if(users[i].age<20) {
        //         result.push(users[i]);
        //     }
            
        // }
        // return result;
        
    // }
    // console.log(customFind());

    let users = [
        {id: 1, name: "Vic", age: 21},
        {id: 2, name: "Petya", age: 30},
        {id: 3, name: "Jon", age: 5}
      ];
      let customFind = users.filter(function (item) { return item.age < 20 });
      
    console.log(customFind); 
    

    console.log('------------- #8')
    let users2 = [
        {id: 1, name: "Vic", age: 21},  
        {id: 2, name: "Petya", age: 30}, 
        {id: 3, name: "Jon", age: 5}
    ];
    let names = [];
    users2.forEach(function(users) {
      names.push( users.name ); 

    });
    console.log(names); 


console.log('------------- #9')
let arr5 = [5, 3, 8, 1];
  function filterRangeInPlace(arr5, a, b) {
    arr5.forEach((element, index) => {
    
        if (element >= a && element <= b) {
        arr5.splice(index -1, 1);
      }
    });
    console.log(arr5);
  }
filterRangeInPlace(arr5, 1, 4);

console.log('------------- #10')
function makeArr (string, sep) {
    let arr7 = string.split(sep);
    console.log (arr7);
}
makeArr('my string',' ');

console.log('------------- #11')
let arr9 = [5, 3, 8, 1];

  function slArray(arr,  startIndex, endIndex) {
   let newArr=arr.slice(startIndex, endIndex+1 );
    return newArr;
  }
let range = slArray(arr9, 1, 3);
console.log(range);
console.log(arr9);

console.log('------------- #12')
function sumAll(...args) { 
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  console.log(sumAll(1, 2, 3));