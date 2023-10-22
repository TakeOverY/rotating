const fs = require('fs');
const path = require('path');

const assetPath = path.join(__dirname, 'asset', 'proxy.txt');
const mainPath = path.join(__dirname, 'proxy.txt');

try {
    const data = fs.readFileSync(assetPath, 'utf-8');
    fs.writeFileSync(mainPath, data);
    console.log('Successfully copied proxy.txt from asset folder to the main folder.');
} catch (error) {
    console.error('Error copying proxy.txt:', error);
}
