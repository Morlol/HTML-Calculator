var Number = 0;
var inputNum = 0;
var inputNum2 = 0;
var op = 0;
var FirstNum = false;
var FirstNum2 = false;

function Mclick(num) {
    if (FirstNum == true) {
        console.log("Test")
        if (FirstNum2 == true) {
            console.log("Second Input")
            if (op == 1) {
                Number = Number + num;
                //alert(Number);
            } else if (op == 2) {
                Number = Number - num;
                //alert(Number);
            } else if (op == 3) {
                Number = Number * num;
                //alert(Number);
            } else if (op == 4) {
                Number = Number / num;
                //alert(Number);
        } op = 0
    } else {
            console.log("First Input")
            FirstNum2 = true;
            if (op == 1) {
            Number = inputNum + num;
            //alert(Number);
        } else if (op == 2) {
            Number = inputNum - num;
            //alert(Number);
        } else if (op == 3) {
            Number = inputNum * num;
            //alert(Number);
        } else if (op == 4) {
            Number = inputNum / num;
            //alert(Number);
    };
} document.getElementById("NumberTXT").innerHTML = Number
    } else {
        FirstNum = true;
        inputNum = num;
        console.log(num);
    }
};


function Mcalc(operation) {
    console.log(operation);
    if (operation == "Plus") {
        op = 1;
    } else if (operation == "Minus") {
        op = 2;
    } else if (operation == "Mal") {
        op = 3;
    } else if (operation == "Dividiert") {
        op = 4;
    }
};