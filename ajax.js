function handler() {
    console.log("handled");
    if (this.status === 200) {
        console.log(this.responseXML);
    }
}

var client = new XMLHttpRequest();
client.onreadystatechange = handler;
client.open("GET", "unicorn.xml");
client.send();
