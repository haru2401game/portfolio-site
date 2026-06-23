const fs = require("fs");

async function main() {

    const response = await fetch(
        "https://note.com/ha_03ru_01/rss"
    );

    const xml = await response.text();

    console.log(xml.substring(0, 3000));

    const stats = {
        latestTitle: "",
        latestDate: "",
        latestUrl: ""
    };

    fs.writeFileSync(
        "./data/stats.json",
        JSON.stringify(stats, null, 2)
    );
}

main();