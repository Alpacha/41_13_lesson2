const fs = require('fs');

const document = fs.readFileSync('doc.txt', 'utf-8', (err, data) => data);

fs.writeFileSync('doc.txt', document + '\n' + 'hjjfwlekljwfej', (err) => {});
