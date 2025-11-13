const domain='misskey.io';
const s = screen;
const e = encodeURIComponent;
let sel = '';
if( document.getSelection().toString().length != 0){
    sel = `> ${document.getSelection().toString()}`;
}
window.open(
    "https://"+ domain +"/share?text="+
    e(sel)  + "%0A%0A" +
    e(document.title)+" "+e(location.href),
    "_blank",
    "width=550,height=420,left="+
    (s.availLeft+s.availWidth/2-275)+
    ",top="+(s.availTop+s.availHeight/2-210)
);
