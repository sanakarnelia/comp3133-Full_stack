const fs = require('fs');
const csv = require('csv-parser');

// File names
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
}


fs.writeFileSync(canadaFile, 'country,year,population\n');
fs.writeFileSync(usaFile, 'country,year,population\n');

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.toLowerCase();

        
        if (country === 'canada') {
            const line = `${row.country},${row.year},${row.population}\n`;
            fs.appendFileSync(canadaFile, line);
        }

        if (country === 'united states') {
            const line = `${row.country},${row.year},${row.population}\n`;
            fs.appendFileSync(usaFile, line);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully created.');
    });
