/*
?   用箭頭函數重寫下面的函數表達式：
*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

// *  解答：

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask('Do you agree?',
    () => alert('You agreed.'),
    () => alert('You canceled the execution.')
);