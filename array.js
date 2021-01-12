const companies = [
   {name: 'Company 1', category: 'Finance', start: 1981, end: 2003},
   {name: 'Company 2', category: 'Retail', start: 1980, end: 2003},
   {name: 'Company 3', category: 'Auto', start: 1983, end: 2003},
   {name: 'Company 4', category: 'Finance', start: 1985, end: 2003},
   {name: 'Company 5', category: 'Retail', start: 1999, end: 2003},
   {name: 'Company 6', category: 'Technology', start: 1990, end: 2003},
   {name: 'Company 7', category: 'Auto', start: 1993, end: 2003},
   {name: 'Company 8', category: 'Finance', start: 1994, end: 2003},
]

const ages = [32,45,76,56,54,43,78,34,21,32,11,23,55,67];
/*
//for
for (let i = 0; i<companies.length; i++){
   console.log(companies[i]);
}

// foreach
companies.forEach(function(company) {
   console.log(company);
});
*/

//filter

//A) get 21 and older
/*
//1
let canDrink = [];
for(let i=0; i<ages.length; i++) {
   if(ages[i] >= 21){
      canDrink.push(ages[i]);
   }
}
console.log(canDrink);

//2
canDrink = ages.filter(function(age){
   if(age >= 21) {
      return true;
   }
});
console.log(canDrink);

//3
canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
*/
/*
// B) filter retail companies
const retailCompanies = companies.filter(function(company){
   if(company.category === 'Retail'){
      return true;
   }
});
console.log(retailCompanies);

const financeCompanies = companies.filter(company => company.category === 'Finance');
console.log(financeCompanies);

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <1990));
console.log(eightiesCompanies);
*/

/*
//map
const companyNames = companies.map(function(company){
   return company.name;
});
console.log(companyNames);

const testMap = companies.map(function(company){
   return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap2);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(ageMap);
*/


// sort
const sortedCompanies = companies.sort(function(c1, c2) {
   if(c1.start > c2.start) {
      return 1;
   } else {
      return -1;
   }
});
console.log(sortedCompanies);

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
console.log(sortedCompanies2);

const sortAges = ages.sort((a , b) => a - b);
console.log(sortAges);

const sortAges2 = ages.sort((a , b) => b - a);
console.log(sortAges2);

/*
// reduce
let ageSum1 = 0;
for(let i=0; i<ages.length; i++){
   ageSum1 += ages[i];
}

const ageSum2 = ages.reduce(function(total, age) {
   return total + age;
}, 0);

const ageSum3 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum1);
console.log(ageSum2);
console.log(ageSum3);
*/
