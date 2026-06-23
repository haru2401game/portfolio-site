const fs = require("fs");

async function main() {

    const response = await fetch(
        "https://note.com/ha_03ru_01"
    );

    const html = await response.text();

    console.log(html.substring(0, 5000));

}

main();