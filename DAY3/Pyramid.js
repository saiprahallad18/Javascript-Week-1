for(let i = 1; i<=5;i++){
    let row = "";
    for(let space=1; space<=5 - i; space++){
        row += " ";
    }
    for(let star = 1; star <= 2 * i -1; star++){
        row+= "*";
    }
    console.log(row);
}