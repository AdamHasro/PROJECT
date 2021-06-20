function onsubmitform() {
	var code1 = document.getElementById("subject1").value;
	var code2 = document.getElementById("subject2").value;
	var code3 = document.getElementById("subject3").value;
	var name1 = document.getElementById("subjectname1").value;
	var name2 = document.getElementById("subjectname2").value;
	var name3 = document.getElementById("subjectname3").value;
	var credit1 = document.getElementById("credithour1").value;
	var credit2 = document.getElementById("credithour2").value;
	var credit3 = document.getElementById("credithour3").value;
	var mark1 = parseInt(document.getElementById("marks1").value);
	var mark2 = parseInt(document.getElementById("marks2").value);
	var mark3 = parseInt(document.getElementById("marks3").value);
	var totalmark = 0;
	var average;

	var totalaverage;

	if (code1 && name1 && credit1 && mark1 && code2 && name2 && credit2 && mark2 && code3 && name3 && credit3 && mark3) {
		if (mark1 >= 80 && mark1 <= 100) {
			document.getElementById("grade1").innerHTML = "A";
		}
		else if (mark1 >= 75 && mark1 <= 79) {
			document.getElementById("grade1").innerHTML = "A-";
		}
		else if (mark1 >= 70 && mark1 <= 74) {
			document.getElementById("grade1").innerHTML = "B+";
		}
		else if (mark1 >= 60 && mark1 <= 69) {
			document.getElementById("grade1").innerHTML = "B";
		}
		else if (mark1 >= 55 && mark1 <= 59) {
			document.getElementById("grade1").innerHTML = "C+";
		}
		else if (mark1 >= 50 && mark1 <= 54) {
			document.getElementById("grade1").innerHTML = "C";
		}
		else if (mark1 >= 40 && mark1 <= 49) {
			document.getElementById("grade1").innerHTML = "D";
		}
		else if (mark1 >= 0 && mark1 <= 39) {
			document.getElementById("grade1").innerHTML = "F";
		}
		if (mark2 >= 80 && mark2 <= 100) {
			document.getElementById("grade2").innerHTML = "A";
		}
		else if (mark2 >= 75 && mark2 <= 79) {
			document.getElementById("grade2").innerHTML = "A-";
		}
		else if (mark2 >= 70 && mark2 <= 74) {
			document.getElementById("grade2").innerHTML = "B+";
		}
		else if (mark2 >= 60 && mark2 <= 69) {
			document.getElementById("grade2").innerHTML = "B";
		}
		else if (mark2 >= 55 && mark2 <= 59) {
			document.getElementById("grade2").innerHTML = "C+";
		}
		else if (mark2 >= 50 && mark2 <= 54) {
			document.getElementById("grade2").innerHTML = "C";
		}
		else if (mark2 >= 40 && mark2 <= 49) {
			document.getElementById("grade2").innerHTML = "D";
		}
		else if (mark2 >= 0 && mark2 <= 39) {
			document.getElementById("grade2").innerHTML = "F";
		}
		if (mark3 >= 80 && mark3 <= 100) {
			document.getElementById("grade3").innerHTML = "A";
		}
		else if (mark3 >= 75 && mark3 <= 79) {
			document.getElementById("grade3").innerHTML = "A-";
		}
		else if (mark3 >= 70 && mark3 <= 74) {
			document.getElementById("grade3").innerHTML = "B+";
		}
		else if (mark3 >= 60 && mark3 <= 69) {
			document.getElementById("grade3").innerHTML = "B";
		}
		else if (mark3 >= 55 && mark3 <= 59) {
			document.getElementById("grade3").innerHTML = "C+";
		}
		else if (mark3 >= 50 && mark3 <= 54) {
			document.getElementById("grade3").innerHTML = "C";
		}
		else if (mark3 >= 40 && mark3 <= 49) {
			document.getElementById("grade3").innerHTML = "D";
		}
		else if (mark3 >= 0 && mark3 <= 39) {
			document.getElementById("grade3").innerHTML = "F";
		}
		totalmark = mark1 + mark2 + mark3;
		document.getElementById("total").innerHTML = totalmark;
		totalaverage = totalmark / 3;
		avg = totalaverage.toFixed(2);
		if (avg <= 39){
			document.getElementById("average").innerHTML = avg;
			document.getElementById("average").style.color = "red";
		}
		else (avg >= 40);{
			document.getElementById("average").innerHTML = avg;
			document.getElementById("average").style.color = 'black';

		}
	}
	else {
		alert("Incomplete form");
	}
	return false;
}
function confirmbox() {
	confirm("Confirm to Calculate?")
	return false;
}
