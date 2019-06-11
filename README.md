# timely
Time interval generator in JavaScript in ECMAScript 6

In this timely.js file these is a function called  timeSlotGenerator() that take 3 parametes start, end, and interval where all are in STRING format and returns an array  of timeslots.

Where first parameter start is the starting time(In hours) for your timeslot to begins, second parameter end is the end time(In Hours) for your timeslot to end, and third parameter interval which is the duration of each interval(In seconds)

Remember all three parameters are of type string.

EXAMPLE
In this example we will start from 9:00 AM till 10:00 PM (but in hours format, that is 22 hours) and time interval to be 1 hour that is 3600 seconds.

In javascript we can call the timeSlotGenerator() as follows.


let timeSlot = timeSlotGenerator("9:00","22:00", "3600");
console.log(timeSlot);


This will console an array of timeslots as below.
[ '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
  '19:00 - 20:00',
  '20:00 - 21:00',
  '21:00 - 22:00',
  '22:00 - 23:00' ]
