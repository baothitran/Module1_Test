let vowelArray = ["a","o","e","u","i"];
let str = prompt('Nhập vào chuỗi cần kiểm tra');
let strArray = str.split('');
function countVowel(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < vowelArray.length; j++) {
            if (array[i] == vowelArray[j]) {
                count++;
            }
        }
    }
    if (count == 0) {
        return "Không có ký tự nguyên âm trong chuỗi đã cho";
    } else {
        return `Số ký tự nguyên âm trong chuỗi đã cho là ${count}`;
    }
}

document.write(countVowel(strArray))
