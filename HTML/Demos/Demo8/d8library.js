/* Function XmasDays()
   Purpose: Calculate the number of days between Christmas and a given date
   
   Variables:
   CheckDay: A date object containing the given date
   XYear: The 4-digit year value of the given date
   XDay: December 25 in the year of the given date
   DayCount: The number of days between Christmas and the given date
 */
 
 function XmasDays(CheckDay)
 {
    var XYear=CheckDay.getFullYear();
    var XDay=new Date("December, 25, 2005");
    XDay.setFullYear(XYear);
    var DayCount=(XDay-CheckDay)/(1000*60*60*24);
    DayCount=Math.round(DayCount);
    return DayCount;
 }
   