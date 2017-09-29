var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:"
  if (katzDeliLine.length === 0) {
    line = "The line is currently empty."
  } else {
    line = `${line} 1. ${katzDeliLine[0]}`;
    for (var i = 1; i < katzDeliLine.length - 1; i++) {
      line = `, ${line} ${i+1}. ${katzDeliLine[i]}`;
    }
  }
  return line;
}
