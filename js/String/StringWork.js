
//split clean Code
const location = 'en-IN';
const locationSplit = location.split('-');
const lang = locationSplit[0]
const country = locationSplit[1]
console.log(lang,country)

const [l,c] = location.split('-')
console.log(l,c);
