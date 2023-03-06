function isExistedInArray(number, numberArray) {
    let position = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === number) {
            position += 1 ;
        }
    }
    if (position == 0 ) {
        console.log("Số đã cho không nằm trong mảng đã nhập");
    } else console.log("Số đã cho có nằm trong mảng đã nhập");
}

let num = 13;
let numberArr = [3,9,12,26,25];

isExistedInArray(num,numberArr);
