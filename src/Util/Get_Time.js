const weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(day, month, year) {
  var date = new Date(year, month, 1);

  var days = [];
  while (date.getMonth() === month) {
    days.push({
      Year: date.getFullYear(),
      Week_Month: month + 1,
      Week_Day: weekday[date.getDay()],
      Day: date.getDate(),
    });

    // if (date.setDate(date.getDate() + 1))

    date.setDate(date.getDate() + 1);
  }

  return days;
}
const Convert_DateToString = (Value) => {
  // return new Date(
  //   `${Value.Year}-${
  //     Value.Week_Month > 9 ? Value.Week_Month : `0${Value.Week_Month}`
  //   }-${Value.Day > 9 ? Value.Day : `0${Value.Day}`}T21:00:00.451Z`
  // );

  return new Date(Value.Year + "-" + Value.Week_Month + "-" + Value.Day);
};

const Date_Handle = (date) => {
  const temp = new Date(date);
  return {
    minute: temp.getMinutes(),
    hour: temp.getHours(),
    day: temp.getDate(),
    month: temp.getMonth() + 1,
    year: temp.getFullYear(),
  };
};

const Get_Current_Date = () => {
  const temp = new Date();
  return {
    hour: temp.getHours(),
    day: temp.getDate(),
    month: temp.getMonth() + 1,
    year: temp.getFullYear(),
  };
};

export { getDaysInMonth, Date_Handle, Convert_DateToString, Get_Current_Date };
