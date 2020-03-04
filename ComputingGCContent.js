http://rosalind.info/problems/gc/


const Rosalind_1=prompt();
const Rosalind_2=prompt();
const Rosalind_3=prompt();
const Rosalind_4=prompt();
const Rosalind_5=prompt();
const Rosalind_6=prompt();
const Rosalind_7=prompt();
const Rosalind_8=prompt();
const Rosalind_9=prompt();
const Rosalind_10=prompt();

function GC(name) {
    const newTable = [];
    const newTable2=[];
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) === "C" || name.charAt(i) === "G") {
            newTable.push(name.charAt(i))
        }
        if (name.charAt(i) === "C" || name.charAt(i) === "G" || (name.charAt(i) === "A" || name.charAt(i) === "T")){
            newTable2.push(name.charAt(i))
        }
    }
    let result = ((newTable.length) / (newTable2.length)) * 100;
console.log(name.length);
console.log(newTable.length);
    console.log(result);
    return result;
}

const a = GC(Rosalind_1);
const b = GC(Rosalind_2);
const c = GC(Rosalind_3);
const d = GC(Rosalind_4);
const e = GC(Rosalind_5);
const f = GC(Rosalind_6);
const g = GC(Rosalind_7);
const h = GC(Rosalind_8);
const i = GC(Rosalind_9);
const j = GC(Rosalind_10);


const score = Math.max(a, b, c, d, e, f, g, h, i, j );
console.log(a);
console.log(score);




