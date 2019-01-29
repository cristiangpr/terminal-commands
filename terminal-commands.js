const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile(file, data, (err) => {
  if (err) throw err;

  console.log('success')
});
};

module.exports.mkdir = () => {
  fs.mkdir('./', { recursive: true }, (err) => {
    if (err) throw err;
  });
}
