/**
 * Module Export.
 */

module.exports = function () {
  var week = 1;
  var date = new Date()

  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getUTCDate()

  if (day > 7 && day <= 14) week = 2;
  if (day > 14 && day <= 21) week = 3;
  if (day > 21) week = 4;

  return 'vendor/' + year + '/' + month + '/' + week
}
