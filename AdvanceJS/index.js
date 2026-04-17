function fakeApi(){
    console.log("Loading...");
    setTimeout(()=>{
        const data = {name : "adk"};
        console.log("Data: ", data );
    }, 2000);
}
fakeApi();