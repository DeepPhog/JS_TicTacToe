var reset = document.getElementById("reset")
var table = document.getElementById("table")
var row1 = document.getElementById("row1").childNodes
var row2 = document.getElementById("row2").childNodes
var row3 = document.getElementById("row3").childNodes
var X = document.getElementById("X")
var O = document.getElementById("O")
var rownum = 0
var char = "X"
var count = 0
var numc = 0
var win = 0
var y = 0
var n = 0
var rows = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
reset.onclick = function () {
    re()
}
function re() {
    row1.forEach(list => {
        list.innerHTML = ""
    })
    row2.forEach(list => {
        list.innerHTML = ""
    })
    row3.forEach(list => {
        list.innerHTML = ""
    })
    numc = 0
    rows = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
}
function change() {
    var cpro = numc % 2
    numc++
    if (cpro == 0) {
        char = "X"
    } else if (cpro != 0) {
        char = "O"
    }
    return char;
}
function changeFunc(ls, row) {
    if (ls.innerHTML == ! " ") {
        let ch = change()
        ls.innerHTML = ch
        n = ls.getAttribute("id") - 1;
        y = row - 1;
        rows[n][y] = char
        checkforwin(y, n)
    }
}
row1.forEach(list => {
    list.onclick = function () {
        rownum = 1
        changeFunc(list, rownum)
    }
});
row2.forEach(list => {
    list.onclick = function () {
        rownum = 2
        changeFunc(list, rownum)
    }
});
row3.forEach(list => {
    list.onclick = function () {
        rownum = 3
        changeFunc(list, rownum)
    }
});
function checkforwin(y, n) {
    var countY = 0
    var countN = 0
    for (let i = 0; i < 3; i++) {
        if (rows[i][y] == char) {
            countY++
        }
        if (rows[n][i] == char) {
            countN++
        }
    }
    if (rows[0][0] == char && rows[1][1] == char && rows[2][2] == char) {
        win = 1
        Win(win)
    }
    if (rows[0][2] == char && rows[1][1] == char && rows[2][0] == char) {
        win = 2
        Win(win)
    }
    if (countN == 3 || countY == 3) {
        win = 3
        Win(win)
    }
}
function Win(win) {
    console.log(char + " won");
    if (char == "X") {
        X.innerHTML++
    } else {
        O.innerHTML++
    }
    if (win == 1) {

    } else if (win == 2) {

    }
    console.log(rows);
    re()
}