/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const randomNums = randomUniqueNum(100, 5)
console.log(randomNums);

const containerRandomNums = document.querySelector("ul");

for (let index = 0; index < randomNums.length; index++) {
    let num = randomNums[index];
    let numContainer = `<li>${num}</li>`
    containerRandomNums.innerHTML += numContainer;
    
}

let secondsMancanti = 3;

let time = setInterval(
function () {
  if (secondsMancanti === 0) {
    containerRandomNums.classList.add("dispalynone");
    clearInterval(time);

  }
  else{
    secondsMancanti--
    console.log(secondsMancanti);
  }
},
1000

)

let seconds = setTimeout(
function () {
   
    let writeNumber1 = parseInt(prompt("scrivi il primo numero"));
    let writeNumber2 = parseInt(prompt("scrivi il secondo numero"));
    let writeNumber3 = parseInt(prompt("scrivi il terzo numero"));
    let writeNumber4 = parseInt(prompt("scrivi il quarto numero"));
    let writeNumber5 = parseInt(prompt("scrivi il quinto numero")); 
    
    console.log(writeNumber1);
    console.log(writeNumber2);
    console.log(writeNumber3);
    console.log(writeNumber4);
    console.log(writeNumber5);

    arreyNumUtente = [writeNumber1, writeNumber2, writeNumber3, writeNumber4, writeNumber5]
    console.log(arreyNumUtente);


   let strinRandomNum = randomNums.join(); 
   console.log(strinRandomNum);

   let strinNumUtente = arreyNumUtente.join();
    
if (strinRandomNum === strinNumUtente) {
    console.log("Hai vinto");
}
else{
    console.log("Hai perso");
}
  
},
5000

) 



/* FUNZIONi */

function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }