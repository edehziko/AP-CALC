document.getElementById("submit");onclick = function(){
A = document.getElementById("A").value;
A = Number(A);

N = document.getElementById("N").value;
N = Number(N);

D = document.getElementById("D").value;
D = Number(D);

AP = A + (N - 1) * D;

document.getElementById("result").innerHTML = "The A.P of " + A + " + ( " + N + " - 1) * "  + D + " = " + AP;
};