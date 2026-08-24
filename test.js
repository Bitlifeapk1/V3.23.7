var itemCat = "desserts";
var activeCat = "desserts";
var match = !(itemCat !== activeCat && itemCat + 's' !== activeCat && itemCat !== activeCat + 's');
WScript.Echo("Match: " + match);
