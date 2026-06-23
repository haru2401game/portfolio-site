const fs = require("fs");

async function main() {

    const response = await fetch(
        "https://note.com/ha_03ru_01/rss"
    );

    const xml = await response.text();

    const titleMatch =
        xml.match(/<item>[\s\S]*?<title>(.*?)<\/title>/);

    const dateMatch =
        xml.match(/<item>[\s\S]*?<pubDate>(.*?)<\/pubDate>/);

    const linkMatch =
        xml.match(/<item>[\s\S]*?<link>(.*?)<\/link>/);

    if (!titleMatch) {
        throw new Error("最新記事取得失敗");
    }

    const date = new Date(dateMatch[1]);

    const formattedDate =
        `${date.getFullYear()}/` +
        `${String(date.getMonth() + 1).padStart(2, "0")}/` +
        `${String(date.getDate()).padStart(2, "0")}`;

    const stats = {
        latestTitle: titleMatch[1],
        latestDate: formattedDate,
        latestUrl: linkMatch[1]
    };

    fs.writeFileSync(
        "./data/stats.json",
        JSON.stringify(stats, null, 2)
    );

    console.log(stats);
}

main();