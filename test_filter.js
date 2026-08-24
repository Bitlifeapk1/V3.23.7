var fs = new ActiveXObject('Scripting.FileSystemObject');
var file = fs.OpenTextFile('js/data.js', 1);
var content = file.ReadAll();
file.Close();
content = content.replace('export const MENU_DATA', 'var MENU_DATA');
eval(content);

var activeCategory = 'desserts';
var filtered = MENU_DATA.items.filter(function(item) {
  var itemCat = (item.category || '').toString().toLowerCase().replace(/^\s+|\s+$/g, '');
  var activeCat = activeCategory;
  if (itemCat !== activeCat && itemCat + 's' !== activeCat && itemCat !== activeCat + 's') {
    return false;
  }
  return true;
});
WScript.Echo('Filtered count: ' + filtered.length);
