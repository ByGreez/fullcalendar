(function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):t(jQuery,moment)})(function(t,e){"use strict";function n(t,e,n){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?i[n][0]:i[n][1]}var i=e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:n,mm:"%d Minuten",h:n,hh:"%d Stunden",d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});return i});