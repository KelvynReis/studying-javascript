function* geradora1(){
    //codigo qualquer ...
    yield 'Valor 1';
    //codigo qualquer ...
    yield 'Valor 2';
    //codigo qualquer ...
    yield 'Valor 2';
}

const g1 = geradora1();
console.log(g1.next());