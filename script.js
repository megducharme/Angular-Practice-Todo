// // console.log("Meg")

// var secondsMinute = 60;
// var minutesHour = 60;
// var hoursDay = 24;
// var daysYear = 365;
// var megAge = 28;
// var megAgeMinutes = (megAge*daysYear*hoursDay*minutesHour*secondsMinute)

// console.log(megAgeMinutes)

// if (megAgeMinutes >= 138267) {
//   alert("I'm old!");
// } else if (megAgeMinutes <= 147283) {
//   alert("I am young!")
// }


// for (var i = 0; i < 100; i += 10) {
//   console.log(i);
// }

// var newArray = []
// for (var i = 14682; i >= 345; i /= 2) {
//   console.log(i);
//   newArray.push(i);
//   console.log(newArray);
// }


// for (var newArray = [], i = 100; i >= 0; i -= 1) {
//   if (i%2 === 0) {
//     newArray.unshift(i);
//   } else {
//     newArray.push(i);
//   }
//   console.log(newArray)
// }


// var phrase = "The lazy dog";
// var newPhrase = phrase.replace("lazy", "bounding");
// alert(newPhrase);

// var phrase = "I love JavaScript!";
// var newPhrase = phrase.replace("I love JavaScript", "This is cool!");
// alert(newPhrase);

// var phrase = "Hey, look at me!";
// var element = document.getElementById("container");
// element.innerHTML = phrase;



// // function range (num) {
// //   var array = []
// //   for (var i = 0; i < num; i++) {
// //     array.push(i)
// //   }
// //    return array
// // }

// console.log("#1:", range(5))


// function rangeObject (num, value) {
//   var obj = {}
//   for (var i = 0; i < num; i++)
//     obj[i] = value;
//     return obj
// }

// console.log( "#2", rangeObject(9, 6))

// Alpha stacker

// var letters = ['a','b','c','d','e','f','g','h','i','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// var newString = "";

// function stackLetters () {
//   for (var i = 0; i < letters.length; i++) {
//     if (i % 5 === 0 && i != 0) {
//       newString += " ";
//     }
//       newString += letters[i];
//       console.log(newString);
//     }
//   }

// stackLetters ();


// function letterStacker


//Colored Reindeer Exercise



var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for (var i = 0 ; i < reindeer.length; i++) {
  // console.log(colors[i] + " " + reindeer [i]);
  // console.log(hohohoElement.innerHTML);
  hohohoElement.innerHTML += "<div>" colors[i] + " " + reindeer[i] + "</div>";
}






































