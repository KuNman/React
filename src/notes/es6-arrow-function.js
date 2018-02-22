const fullName = "Adam Nowacki";

const getFirstNameArrow = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getFirstNameArrow(fullName));

const getFirstNameShortHandArrow = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameShortHandArrow(fullName));
