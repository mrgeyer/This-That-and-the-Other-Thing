questions = [];

function checkUndefined(stud) {
    return stud != undefined;
}

function checkBlank(stud) {
    return stud != "";
}


function loadThis() {
	var fileToLoad = document.getElementById("ThisToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		thisArray = textFromFileLoaded .split("\n");

		thisArray = thisArray.filter(checkUndefined);
		thisArray = thisArray.filter(checkBlank);
    		thisCat = thisArray[0];
	    	thisArray.shift();

		document.getElementById("thisCat").innerHTML = thisCat;
    
    		questions = questions.concat(thisArray);
    
    questions.sort(function(a, b){return 0.5 - Math.random()});

		document.getElementById("thisThings").innerHTML = thisArray;
		question = questions[0];
		qs = 0;
		document.getElementById('question').innerHTML = question;	
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}

function loadThat() {
	var fileToLoad = document.getElementById("ThatToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		thatArray = textFromFileLoaded .split("\n");

		thatArray = thatArray.filter(checkUndefined);
		thatArray = thatArray.filter(checkBlank);
        	thatCat = thatArray[0];
    		thatArray.shift();

		document.getElementById("thatCat").innerHTML = thatCat;

    
    questions = questions.concat(thatArray);
    
    questions.sort(function(a, b){return 0.5 - Math.random()});

		//document.getElementById("inputTextToSave").value = thatArray;
		question = questions[0];
		qs = 0;
		document.getElementById('question').innerHTML = question;	
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}
