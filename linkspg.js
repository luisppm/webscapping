const puppeteer = require('puppeteer');

const urlAlvo = "https://sc.olx.com.br/norte-de-santa-catarina/regiao-de-joinville-e-norte-do-estado/imoveis/aluguel"

async function linkpg (linkPesquisa) {
    const dados = [];
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        // defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(linkPesquisa);

    const options = await page.$$eval('.sc-1fcmfeb-1.kntIvV > li > a', (opts) => 
        opts.map((option) => option.attributes[6].nodeValue)
    );

    await browser.close();

    await options.map((link) => {
        const olnk = link
        dados.push(olnk);
    })

    // await console.log(dados);
    return dados;
}

// linkImovel(urlAlvo);

module.exports = linkpg;