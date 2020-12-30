import { createCanvas, registerFont } from 'canvas';
import * as fs from 'fs';
import { writeFileSync } from 'fs';
import path from 'path';

async function main() {
  const [, , outputDirectory] = process.argv;
  fs.mkdirSync(outputDirectory, { recursive: true });

  const fontFamily = 'Source Han Sans';
  const fontPath = path.join(__dirname, '../training/font/source_han_sans.ttf');
  registerFont(fontPath, { family: fontFamily });

  const dpr = 2;
  const canvas = createCanvas(18 * dpr, 26 * dpr);
  const context = canvas.getContext('2d');
  context.scale(dpr, dpr);

  const charset = '0123456789';
  // Fontsize: iPad: 19px, iPhone X: 20px.
  // const fontSizes = ['14px', '15px', '16px', '18px', '19px', '20px', '21px'];
  const fontSizes = ['32px'];
  for (const character of [...charset]) {
    for (const fontSize of fontSizes) {
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.font = `${fontSize} "${fontFamily}"`;
      context.fillStyle = '#fff';
      context.fillText(character, 0, 24);

      const outputPath = path.join(outputDirectory, `tmpl_${character}_${fontSize}.png`);
      const buffer = canvas.toBuffer('image/png');
      writeFileSync(outputPath, buffer);

      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

const ignored = main();
