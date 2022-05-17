// JavaScript Document

// ELEMENT BY ID (single object)
// let foundYou = document.getElementById('overview');
// // console.log(foundYou);
// // console.log(foundYou.innerText);
// foundYou.innerText = ">>You've been changed<<";

//ELEMENETS BY TAG NAME (collection)
// let foundYou = document.getElementsByTagName('h1');
// // console.log(foundYou);
// // console.log(foundYou[2].innerText);
// foundYou[2].innerText = ">>And you've been changed<<";


//ELEMENTS BY NAME (collection)
// let foundYou = document.getElementsByName('description');
// // console.log(foundYou);
// // console.log(foundYou[0].innerText);
// foundYou[0].innerHTML = ">>Changed again<<";


//ELEMENTS BY CLASS NAME (collection)
// let foundYou = document.getElementsByClassName('smallCenter');
// // console.log(foundYou);
// // console.log(foundYou[0].innerText);
// foundYou[0].innerHTML = ">>Changed!<<";


//QUERY SELECTOR ALL (collection)
// let foundYou = document.querySelectorAll('li');
// // console.log(foundYou);
// // console.log(foundYou[5].innerText);
// foundYou[5].innerHTML = ">>I Changed You<<";

// let foundYou = document.querySelectorAll('ul#lp_list li');
// // console.log(foundYou);
// // console.log(foundYou[2].innerText);
// foundYou[2].innerHTML = ">>!!Changed!!<<";


//++++++++++++++++++ COMBINATIONS +++++++++++++++++++++

// let foundYou = document.getElementById('sw_list');
// // console.log(foundYou);
// let childArray = foundYou.getElementsByTagName('LI');
// // console.log(childArray);
// childArray[0].innerText = '>>These Items';
// childArray[1].innerText = '>> Have Just';
// childArray[2].innerText = '>> Been Changed';



// let newOptions = ['Orange', 'Red', 'Blue'];
// // Setting the values from a form element
// let foundYou = document.getElementById('myForm');
// // console.log(foundYou);
// let selectArray = foundYou.getElementsByTagName('option');
// // console.log(selectArray);
// for (i=0; i<selectArray.length;i++) {
// 	selectArray[i].innerText= newOptions[i];
// }



let foundYou = document.getElementById('myForm');
// console.log(foundYou);
selectArray = foundYou.getElementsByTagName('input');
// console.log(selectArray.length);
for (i=0; i<selectArray.length;i++) {
	console.log(selectArray[i].value);
}
