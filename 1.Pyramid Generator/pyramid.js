const character = "#"; //will serve as building block for the pyramid
const count = 8;
const rows = [];

//create loop using 'for' loop

for(let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";

//create for....of loop
for(const row of rows){
    result = result + character;
    console.log(result);
}
console.log(result);