// function hellow() {
//     console.log('Hellow', this)
// }

// const person = {
//     name: 'Dima',
//     age: 33,
//     sayHellow: hellow,
// }
var f = function() {
    this.x = 5;
    (function() {
        this.x = 3;
    })();
    console.log(this.x);
};

var obj = {
    x: 4,
    m: function() {
        console.log(this.x);
    }
};

f();
new f();
obj.m();
new obj.m();
f.call(f);
obj.m.call(f);