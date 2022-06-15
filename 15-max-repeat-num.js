const n = [4, 4, 2, 14, 5, 7, 14, 14];

function findMostRepeating(arr) {
  const countObj = { mostRepeated: arr[0], highestCount: 1 };

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    !countObj[ele] ? (countObj[ele] = 1) : countObj[ele]++;

    if (countObj[ele] > countObj["highestCount"]) {
      countObj["mostRepeated"] = ele;
      countObj["highestCount"] = countObj[ele];
    }
  }
  const { mostRepeated, highestCount } = countObj;
  return { mostRepeated, highestCount };
}

console.log(findMostRepeating(n));

function getMostVisitedDay(arrayOfDays) {
// input: array of date
// output : the date that has the most visit 
// create obj to record date as a key and num of visit of that date as a value 
// create a key (maxVisitDate) to store the date that has the most visit 

const dateRecord = {[arrayOfDays[0]]:1, maxVisitDate:arrayOfDays[0] };
// iterate over array of date
for (let i = 1; i < arrayOfDays.length; i++) {
  if(arrayOfDays[i] in dateRecord) {
    dateRecord[arrayOfDays[i]]++;
  } else {
    dateRecord[arrayOfDays[i]] = 1;
  }
  console.log('before update:', dateRecord)
    dateRecord.maxVisitDate = dateRecord[dateRecord.maxVisitDate] < dateRecord[arrayOfDays[i]] ? arrayOfDays[i] : dateRecord.maxVisitDate;
    console.log('after update:', dateRecord)
} 

console.log('answer:   ----',dateRecord.maxVisitDate)

// if that date doesn't exist in obj then create it and assign 1 as a value 
// else increment it by one 
// before moving to next index
  // check if 
    // maxVisitDate is undefined Y - assign it to current date
    // N - check if current date visit is greater than the value of maxVisitDate
             // How to check the num of visit
             // obj[date] > obj[maxVisitDate] ? obj[maxVisitDate] = date : do nothing
// when loop ends, return obj[maxVisitDate]
}

getMostVisitedDay(n)