var varsSingle={}; var arrSingle = [];
var InsideInArraySingle=[];
function priSingle(page){
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() { 
var body=xhr.responseText;
var preData=body.split('<!-- ENTRY -->')[1];
preData=preData.split('<!-- ENTRY -->')[0];
//preData=preData.replace(/<(?!iframe\s*\/?)[^>]+>/g, '');
preData=preData.replace(/<a[^>]*>/g, '');
preData=preData.replace(/src="\/\/www.youtube/g, 'src="http://youtube');
preData = preData.replace(/\s+/g,' ').trim();
arrSingle.push({
	data:preData
});
Ti.API.info(arrSingle);

};
xhr.onerror = function() {
    Titanium.API.info('error');
};
xhr.open("GET",page);
xhr.send();
}