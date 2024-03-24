const Seat_Number = (row, colum) => {
  const Row_Id = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
  ];
  let Array = [];

  for (let i = 0; i <= row - 1; ) {
    let temp = [];
    for (let col = 0; col <= colum - 1; col++) {
      temp.push(Row_Id[i] + col + "");
    }
    Array.push(temp);
    i++;
  }
  return Array;
};

const Seat_Handle = (Value, Quantity) => {
  const Check = Value.length - Quantity >= 2;
  if (!Check) {
    if (Value.length > Quantity && Value.length > 1) {
      Value.splice(0, 1);
      return Value;
    } else {
      return Value;
    }
  } else {
    Value.splice(1, Value.length - 1);
    return Value;
  }
};

export { Seat_Number, Seat_Handle };
