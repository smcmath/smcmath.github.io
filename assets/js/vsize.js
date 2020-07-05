// From https://stackoverflow.com/a/44109583
function getvSize() {

 var vWidth;
 var vHeight;

 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined') {
   vWidth = window.innerWidth,
   vHeight = window.innerHeight
 }
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
 && typeof document.documentElement.clientWidth !=
 'undefined' && document.documentElement.clientWidth != 0) {
    vWidth = document.documentElement.clientWidth,
    vHeight = document.documentElement.clientHeight
 }
 // older versions of IE
 else {
   vWidth = document.getElementsByTagName('body')[0].clientWidth,
   vHeight = document.getElementsByTagName('body')[0].clientHeight
 }
 return [vWidth, vHeight];
}
