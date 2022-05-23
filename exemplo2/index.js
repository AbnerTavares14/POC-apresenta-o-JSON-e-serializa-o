import YAML from "yaml";
import { json2xml } from "xml-js";

const obj = {
    animais: [
        "gato",
        "cachorro",
        "coelho"
    ],
    frutas: [
        "maçã",
        "laranja",
        "uva"
    ],
    aleatorio: {
        array: [
            {
                valor_nulo: null
            },
            {
                boolean: true
            },
            {
                integer: 1
            }
        ]
    }
}

const xml = json2xml(obj, {
    compact: true,
    spaces: 4
});

const doc = new YAML.Document();
doc.contents = obj;


// console.log(xml);
console.log(doc);