import sharp from 'sharp';
// Optimize only the supplied portraits; never regenerate former couple or venue assets.
for (const name of ['ahmed-alaa-portrait', 'ahmed-alaa-celebration']) {
 await sharp(`public/assets/images/${name}.jpg`).resize({width:1200,withoutEnlargement:true}).webp({quality:88}).toFile(`public/assets/images/${name}.webp`);
}
