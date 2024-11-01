function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function HelloWorld(){
console.log("Hello");
await delay(2000);
console.log("world");
}
HelloWorld();