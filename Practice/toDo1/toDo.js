var list=[];
var input= prompt("What do you wanna do? 'new' - Add in the list 'list' - Print the list 'quit' - Quit the application");

while(input!=="quit"){
    if(input==="list"){
        console.log(list);
    }
    else if(input==="new"){
        var item = prompt("Enter item in the list");
        list.push(item);
    }
     input= prompt("What do you wanna do? 'new' - Add in the list 'list' - Print the list 'quit' - Quit the application");
}
console.log("You quit!");