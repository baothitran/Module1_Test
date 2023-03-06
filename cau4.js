class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }
    setFullname(fullname) {
        return this.fullname = fullname;
    }
    getFullname() {
        return this.fullname;
    }
    setEmail(email) {
        return this.email = email;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `Fullname: ${this.fullname}, email: ${this.email}`
    }
}

let david = new Staff('David', 'david@gmail.com');
david.setFullname('David Do');
david.setEmail('david.do@gmail.com');
console.log(david.toString());
let Staffs = [
    david,
    new Staff("Bao Thi", 'baothi@gmail.com'),
    new Staff('Bich Thuy', 'bichthuy@gmail.com')
];
let display = '';
Staffs.forEach(function (value) {
    display += `- ${value.toString()}\n`
});
console.log(display);