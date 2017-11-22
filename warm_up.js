// MAX NUMBER
var my_max = function(arr) {
	var max = arr[0];
	for (var i =0; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}

	return max;
}

my_max([55,1,25000,900,126475900,3,12000000000]);

// -> réponse = 12000000000


// VOWELS
function vowel_count(str){
  var vowel = ['a','e','i','o','u','y'];
  var countVowel = 0;
  for(var i=0;i<str.length;i++){
    for(var j=0;j<vowel.length;j++){
      if(str[i] === vowel[j]){
        countVowel += 1;
      }
    }
  }
  return countVowel;
}

vowel_count("TheHackingProject");

// -> réponse = 5

// CESAR
function reverse(str) {
	var reversed = str.split("").reverse().join("");
	return reversed;
}

reverse("TheHackingProject")

// -> réponse = "tcejorPgnikcaHehT"