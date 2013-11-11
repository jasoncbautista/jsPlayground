function handler() {
    console.log("handled");
    if (client.readyState !== 4) {
        console.log(this.responseXML);
        console.log(this.responseJSON);
        console.log(client.responseText);
    }
}

var client = new XMLHttpRequest();
client.onreadystatechange = handler;
client.open("GET", "sample.json");
client.responseType = "json";
client.send();
