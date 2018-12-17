

let elementsArray = ["un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dixsept","dixhuit","dixneuf","vingt"];

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let numbersArray2 = [11,21,31,41,51,61,71,81,91,101,111,121,131,141,151,161];

//EX1 fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau
function displayArray(array) {
  console.log("FCT1");
  let i = 0;
  let currentItem;
  console.log("All elements of array : ");
  while ( i < array.length) { //continuation condition
    currentItem = array[i];
    i++;
    console.log(currentItem); //displays the complete table
  }
}

displayArray(elementsArray);

//EX2 fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau
function tenFirstElements(array) {
  console.log("FCT2");
  let i = 0;
  let currentItem;
  console.log("Ten first elements : ");
  while ( i < array.length ) { //continuation condition
    currentItem = array[i];
    i++;
    console.log(currentItem);
    if (i === 10) { //limit the display to 10
      break
    }
  }
}

tenFirstElements(numbersArray);

//EX3 fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau
function tenLastElements(array) {
  console.log("FCT3");
  let i = array.length - 1;
  let currentItem;
  console.log("Ten last elements : ");
  while (i > array.length - 11 ) { //continuation condition upside down
    currentItem = array[i];
    i--;
    console.log(currentItem);
  }
}

tenLastElements(elementsArray);

//EX4 fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tous les nombres ont augmenté de 1
function elementsMore1(array) {
  console.log("FCT4");
  let i = 0;
  let currentItem;
  var more1copy = []; //creation of an array where the elements that meet the condition are copied
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    currentItem = currentItem + 1; //current element incrementing
    more1copy.push(currentItem); //place the incremented elements in the copy array
  }
  console.log("Array copy : " + more1copy);
}

elementsMore1(numbersArray);

//EX5 fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non
function onlyEvenNumbers(array) {
  console.log("FCT5");
  let i = 0;
  let currentItem;
  var evenNumbers = []; //creation of an array where the elements that meet the condition are copied
  console.log("even elements : ");
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    if (currentItem/2 == Math.round(currentItem/2)) { //test the even or odd condition
      console.log(currentItem);
    }
  }
}

onlyEvenNumbers(numbersArray);

//EX6 fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau
function sumNumbers(array) {
  console.log("FCT6");
  let i = 0;
  let sum = 0;
  while (i < array.length - 1) { //continuation condition
    i++;
    sum += array[i]; //sums elements of array
  }
  console.log("Total sum of all elements : " + sum);
}

sumNumbers(numbersArray);

//EX7 fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau
function evenNumbers(array) {
  console.log("FCT7");
  let i = 0;
  let currentItem = array[i];
  var nbEvenElements = []; //creation of an array where the elements that meet the condition are copied
  console.log("Number of even elements : ");
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    if (currentItem/2 == Math.round(currentItem/2)) { //test the even elements in the copy array
    }
  }
  console.log(nbEvenElements.length); //displays the new array length, so the number of even elements in the first array
}

evenNumbers(numbersArray);

//EX8 fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau
function maxiNumber(array) {
  console.log("FCT8");
  let i = 0;
  let currentItem = array[i];
  let maxArrayItem = 0; //variable that will contain the array maximum value
  console.log("Max value : ");
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    if (array[i] > maxArrayItem) { //search for maximum value
      maxArrayItem = array[i];
    }
  }
  console.log(maxArrayItem); //displays maximum value
}

maxiNumber(numbersArray);

//EX9 fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum et minimum de ce tableau
function maxiMiniNumbers(array) {
  console.log("FCT9");
  let i = 0;
  let currentItem = array[i];
  let maxArrayItem = 0; //maximum value statement
  let minArrayItem = 0; //minimum value statement
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    if (array[i] > maxArrayItem) { //search for maximum value
      maxArrayItem = array[i];
    }
    if (array[i] < minArrayItem) { //search for minimum value
      minArrayItem = array[i];
    }
  }
  console.log("Mini value : " + minArrayItem);
  console.log("Max value : " + maxArrayItem); //displays minimum and maximum values
}

maxiMiniNumbers(numbersArray);

//EX10 fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas
function incAscNumbers(array) {
  console.log("FCT10");
  let i = 0;
  let currentItem = array[i];
  while (i < array.length - 1) { //continuation condition
    currentItem = array[i];
    i++;
    if (currentItem > currentItem[i + 1]) { //compares array elements to define which one is superior to other
      break
      console.log("ASC false"); //states that the table is decreasing
    } else {
        console.log("ASC true"); //states that the table is ascendant
      }
    }
  }

incAscNumbers(numbersArray);

//EX11 fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque élément n'a qu'une seule occurrence
function onlyOneInstance(array) {
  console.log("FCT11");
  let i = 0;
  let j; //second intermediary variable
  let currentItem;
  let canCopy; //boolean allowing to copy or not
  var oneInstanceArrayCopy = [];  //creation of an array where the elements that meet the condition are copied
  oneInstanceArrayCopy.push(array[0]);
  while (i + 1 < array.length - 1) { //continuation condition
    currentItem = array[i + 1];
    i++;
    j = 0;
    canCopy = true;
    while (j < oneInstanceArrayCopy.length) {  //other continuation condition in first continuation condition
      if (currentItem === oneInstanceArrayCopy[i]) { //check duplicates existence
        canCopy = false; //prevent the copy if thay are duplicates
      }
      j++;
    }
    if (canCopy) {
      oneInstanceArrayCopy.push(currentItem); //copy in the new array only one instance of every elements
    }
  }
  console.log(oneInstanceArrayCopy); //displays the new array
}

onlyOneInstance(numbersArray);


//EX12 fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre des éléments est inversé.
function arrayReverse(array) {
  console.log("FCT12");
  let i = 0;
  let currentItem = array[i];
  var copyArrayReversed = []; //creation of an array where the elements that meet the condition are copied
  while (i < array.length) { //continuation condition
    currentItem = array[i];
    i++;
    copyArrayReversed.push(currentItem); //copy the first array in the new array
  }
  copyArrayReversed = copyArrayReversed.reverse(); //reverse the elements array order
  console.log(copyArrayReversed); //display the new array
}
 arrayReverse(numbersArray2);

 //EX13 fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres
 function concatArrays(array1, array2) {
   console.log("FCT13");
   let i = 0;
   let j = 0;
   let currentItemA = array1[i]; //first array current item
   let currentItemB = array2[j]; //second array current item
   var concatedArray = []; //creation of an array where the elements that meet the condition are copied
   while ((i < array1.length) & (j < array2.length)) { //continuation conditions for each arrays
     currentItemA = array1[i];
     i++; //first array incrementing
     currentItemB = array2[j];
     j++; //second array incrementing
   }
   console.log(array1.concat(array2)); //both arrays concattenation
 }

 concatArrays(numbersArray, numbersArray2);

 //EX14 fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle
 function startingVowel(array) {
   console.log("FCT14");
   let i = 0;
   let currentItem = array[i];
   var vowelsArray = []; //creation of an array where the elements that meet the condition are copied
   while (i < array.length) { //continuation condition
     currentItem = array[i];
     i++;
     if (currentItem[0].toUpperCase() == "A" || currentItem[0].toUpperCase() == "E" || currentItem[0].toUpperCase() == "Y" || currentItem[0].toUpperCase() == "U" || currentItem[0].toUpperCase() == "I" || currentItem[0].toUpperCase() == "O") { //search for strings starting with a vowel
       vowelsArray.push(currentItem); //place this strings in the new array
     }
   }
   console.log(vowelsArray); //display the new array
 }

 startingVowel(elementsArray);

 //EX14bis fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est un palindrome, ou qui renvoie faux si ce n’est pas le cas
 function stringPalindrome(array) {
   console.log("FCT14bis");
   let i = 0;
   let currentItem = [array[i]];
   let currentItemReversed = currentItem.reverse();
   while (i < array.length) { //continuation condition
     currentItem = array[i];
     i++;
     currentItemReversed = currentItem.reverse();
     if (currentItem = currentItemReversed) {
       console.log("True palindrome : " + currentItem);
     } else {
       console.log("Not a palindrome : " + currentItem);
     }
   }
   console.log(array);
 }

stringPalindrome(elementsArray);

//EX15 fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas
function stringAnagram(string1, string2) {
  console.log("FCT15");
  let i = 0;
  let currentItem = array[i];

}
