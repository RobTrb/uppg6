/* VITKIT INFO!
module.exports = { changeTextToCaps }; och const { changeTextToCaps } = require("./function.js") är CommonJS import funktion!

export function changeTextToCaps(x) {    
    const textInCaps = x.toUpperCase();
    console.log(textInCaps);
    return textInCaps;
 };

 och: import { changeTextToCaps } from "./function.js"
 Är ES6 Moduler.

 Använder jag CommonJS så fungerar det med testet men inte i webbläsaren (hemsidan fungerar inte, får felmeddelande på grund av att webbläsaren ej verkar ha stöd för CommonJS vilket NodeJS har).
 ES6 Moduler fungerar ej med testet men fungerar i webbläsaren. Till nästa gång jag ska testa: Läs på om CommonJS och ES6 Moduler och hitta en lösning som fungerar i båda fallen.
*/

//import function (CommonJS import)
const { changeTextToCaps } = require("./function.js")

describe("Simple Jest Test", () => {
    test("Test case 1", () => {

        expect(changeTextToCaps("example")).toBe("EXAMPLE");

    });

});