function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var line = "";
  if (katzDeliLine.length = 0) {
    line = "The line is currently empty.";
  } else {
    line = `The line is currently: ${i + 1}. ${katzDeliLine[i]}, ${i + 2}. ${katzDeliLine[i + 1]}` //this is where I screw up
  }
  return line;
}
