const ts = require('typescript');
const fs = require('fs');
const testFilePath = `${__dirname}/test-fixture.ts`;

const testFile = ts.createSourceFile(testFilePath, fs.readFileSync(testFilePath, 'utf8'),
    ts.ScriptTarget.Latest, true, undefined);

const printer = ts.createPrinter();

const arrayLiteral = ts.createArrayLiteral([
    testFile.statements[0].declarationList.declarations[0].name,
    testFile.statements[1].declarationList.declarations[0].name
]);

console.log(printer.printNode(ts.EmitHint.Unspecified, arrayLiteral, testFile));
