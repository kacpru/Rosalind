//  http://rosalind.info/problems/iprb/

const K=28;
const M=89;
const N=21;

const AA=[];
const Aa=[];
const aa=[];

for (let i = 0; i < K; i++){
AA.push("AA")}
console.log(AA);
for (let i = 0; i < M; i++){
    Aa.push("Aa")}
    console.log(Aa);
    for (let i = 0; i < N; i++){
        aa.push("aa")}
        console.log(aa);

function silnia(n) {
    if ((n == 0) || (n == 1))
       return 1
    else {
       let result = (n * silnia(n-1) );
       return result
    }
 }

const i=2;
const probAA=silnia(K)/(silnia(i)*silnia(K-i));
console.log(probAA);

const probAAAa =AA.length*Aa.length;
console.log(probAAAa);

const probAAaa=AA.length*aa.length;

const probAa =silnia(M)/(silnia(i)*silnia(M-i));
console.log(probAa);

const probAaaa=Aa.length*aa.length;
console.log(probAaaa);

const probaaaa=silnia(N)/(silnia(i)*silnia(N-i));


const prob1 =  probAa*0.75;
console.log(prob1);
const prob2 =  probAaaa*0.5;
const prob3 =probAAaa;
const sum=(probAA+probAAAa+prob1+prob2+prob3)/(probAA+probAAAa+probAa+probAaaa+probAAaa+probaaaa);
console.log(sum);
const sum2=(prob2+prob3+probAAAa)/(probAAAa+probAAaa+probAaaa);
console.log(sum2);