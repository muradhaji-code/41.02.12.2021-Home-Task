function GetMonth(num) {
  switch (num) {
    case 1:
      return "Januery";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Wrong input!";
  }
}

console.log("3rd month: " + GetMonth(3));
console.log("12th month: " + GetMonth(12));
console.log("6th month: " + GetMonth(6));
