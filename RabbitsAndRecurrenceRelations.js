// http://rosalind.info/problems/fib/

function fib( n ) {
    let Fn1 = 0;
    let Fn2 = 1;
    let Fn;
    let k=2;
    for(let i = 0; i <= n; i++) {
      if( i > 1 ) {
        Fn = Fn1*k + Fn2;
        Fn1 =Fn2;
        Fn2 = Fn;
      }
    }

   console.log(Fn);
  }
  fibo(28);