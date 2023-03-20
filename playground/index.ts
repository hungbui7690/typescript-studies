/*
  Literal Types P2
  - we can combine literal type with union type 
  
*/

let mood: 'Happy' | 'Sad' = 'Happy'
mood = 'Sad'

///////////////////////////////////

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'

let today: DayOfWeek = 'Monday'

////////////////////////////////////

type Option = 'Yes' | 'No'

let answer: Option = 'Yes'
answer = 'No'
