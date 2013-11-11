function handler() {
    console.log("handled");
    if (client.readyState !== 4) {
        if (client.responseText) {
            console.log(client.responseText);
            var _json = JSON.parse(client.responseText);
            console.log(_json);
        }
    }
}

var client = new XMLHttpRequest();
client.onreadystatechange = handler;
client.open("GET", "sample.json");
client.responseType = "json";
client.send(null);
