const fs = require("fs");

async function main() {

    const response = await fetch(
        "https://note.com/ha_03ru_01/rss"
    );

    const xml = await response.text();

    const titleMatch =
        xml.match(/<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>/);

    const linkMatch =
        xml.match(/<item>[\s\S]*?<link>(.*?)<\/link>/);

    const dateMatch =
        xml.match(/<item>[\s\S]*?<pubDate>(.*?)<\/pubDate>/);

    if (!titleMatch) {
        throw new Error("最新記事取得失敗");
    }

    const stats = {
        latestTitle: titleMatch[1],
        latestUrl: linkMatch ? linkMatch[1] : "",
        latestDate: dateMatch ? dateMatch[1] : ""
    };

    fs.writeFileSync(
        "./data/stats.json",
        JSON.stringify(stats, null, 2)
    );

    console.log(stats);
}

main();