//var katzDeli = [];
//var katzDeliLine = [];
var allDayCustomer = []
function takeANumber(katzDeliLine){
  allDayCustomer.push("p")
  var id = allDayCustomer.length
  katzDeliLine.push(id)
  return `Your number is ${id}`
}
function nowServing(katzDeliLine){
  
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
    } else{
    var shiftNumber = katzDeliLine.shift();
    return `Currently serving ${shiftNumber}.`;
    
  }
}
function currentLine(katzDeliLine){
  var line = katzDeliLine
  if (line.length === 0){
    return `The line is currently empty.`
  } else{
    var i = 0
    var str = "The line is currently: " 
    while(i + 1<line.length){
      str = str + `${i+1}. ${katzDeliLine[i]}, `
      i++
    }
    while(i + 1===line.length){
      str = str + `${i+1}. ${katzDeliLine[i]}`
    }
      return str
  }
}