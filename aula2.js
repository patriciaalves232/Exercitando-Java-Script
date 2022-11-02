/* programa para ver ser o numero é par
usando verdade ou false (true or false)
% seria o resto da divisão]
if-> se
Else -> Senão
!->negação 
quando for uma variavel boleana coloca prefixo de "is"


*/

const numero= 2;

const isnumeropar=(numero%2)===0;
console.log(isnumeropar);

if(isnumeropar) {
    console.log('Par');
}
else{
    console.log('Impar');
}
