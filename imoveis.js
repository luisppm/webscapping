const puppeteer = require('puppeteer');
const db = require("./models");
const linkspg = require('./linkspg');

// const urlAlvo = "https://sc.olx.com.br/norte-de-santa-catarina/regiao-de-joinville-e-norte-do-estado/imoveis/aluguel"
// const urlAlvo = "https://sp.olx.com.br/grande-campinas/regiao-de-campinas/imoveis/aluguel?sd=3450&sd=3460&sd=3461&sd=3454";
const urlAlvo = "https://sp.olx.com.br/grande-campinas/regiao-de-campinas/imoveis/aluguel?pe=1000&ps=500&sd=3450&sd=3460&sd=3461&sd=3454";
let detalhesImovel = [];

const main = async () => {
    console.log('rodando main');

    db.ImoveisOLX.create({
        nome: 'nome de teste 2',
        valor: 4000,
        codigoBruto: '1234f56sdf',
        codigo: '123123',
        urlImovel: 'www.uol.com.br',
        detalhes: 'teste detalhes'
    })
    /*
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: true,
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    const urls = await linkspg(urlAlvo);
    for (let i=0; i < urls.length; ++i) {
        const url = urls[i];
        await page.goto(url);
        await page.waitForTimeout(3000);
        const nome = await page.$eval('.sc-45jt43-0.eCghYu.sc-ifAKCX.cmFKIN', (el) => el.textContent);
        const valor = await page.$eval('.sc-ifAKCX.eQLrcK', (el) => el.textContent);
        const codigoBruto = await page.$eval('.sc-16iz3i7-0.qJvUT.sc-ifAKCX.fizSrB', (el) => el.textContent);
        const codigo = codigoBruto.replace(/\D/gim, '');
        const urlImovel = urlAlvo;
        const detalhesArray = await page.$$('.duvuxf-0.h3us20-0.jyICCp')
        for (let detalheElement of detalhesArray) {
            let detalhesImv = await detalheElement.$eval('.sc-hmzhuo.sc-1f2ug0x-3.ONRJp.sc-jTzLTM.iwtnNi', element => element.innerText);
            const detalhes = await detalhesImv.replace('\n', ':');

            detalhesImovel.push(detalhes);
        }

        console.log({ nome, valor, codigo, detalhesImovel });

    }
    await browser.close();
    */

};
module.exports = main;
