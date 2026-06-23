const fs = require("fs");

async function main() {

    const response = await fetch(
        "https://note.com/ha_03ru_01"
    );

    const html = await response.text();

    console.log("downloaded");

    // 記事数抽出
    const match = html.match(/記事\s*([0-9]+)件/);

    if (!match) {
        throw new Error("記事数が取得できません");
    }

    const articleCount = Number(match[1]);

    console.log(articleCount);

    const stats = {
        blogPosts: articleCount
    };

    fs.writeFileSync(
        "./data/stats.json",
        JSON.stringify(stats, null, 2)
    );
}

main();