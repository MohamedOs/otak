var vars={}; var arr = [];
var InsideInArray=[];
function pri(link){
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
var select = soupselect.select;
var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
if (err) {
alert('Error: ' + err);
} else {
vars.data=select(dom,'h2');
//Ti.API.info(vars.data.length);
//Ti.API.info(vars.data[0].children[1].attribs.href);
// Ti.API.info(vars.data[0].children[1].children[0].data);
//vars.des=select(dom,'.loop-post-content.clearfix');
//Ti.API.info(vars.des.length);
//Ti.API.info(vars.des[0].children[0].data);
vars.img=select(dom,'.crop9 img');
//Ti.API.info(vars.img[0].attribs.src);
for(var i=0;i<vars.data.length;i++){
var tTitle=vars.data[i].children[1].children[0].data;
tTitle=tTitle.replace(/\s+/g,' ').trim();
arr.push({
title:tTitle,
link:vars.data[i].children[1].attribs.href,
//des:vars.des[i].children[0].data,
image:vars.img[i].attribs.src
});
}
 Ti.API.info(arr.length);
  Ti.API.info(arr);

}
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);
};
xhr.onerror = function() {
Titanium.API.info('error');
};
var queryIndexCat=link;
//xhr.open("GET",queryIndexCat);
xhr.open("GET","https://raw.githubusercontent.com/MohamedOs/chanel/master/anime.html");
xhr.send();
}
