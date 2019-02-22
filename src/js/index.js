//工具
function ById(id){
	return document.getElementById(id);
}
var oIconfont1 = ById("iconfont1");
var oShouji = ById("shouji");
var oShengxue = ById("shengxue");
var oPeijian = ById("peijian");
var oShenghuo = ById("shenghuo");
var oApp = ById("App");
var ohidden1 = ById("nav-hidden1");
var ohidden2 = ById("nav-hidden2");
var ohidden3 = ById("nav-hidden3");
var ohidden4 = ById("nav-hidden4");
var ohidden5 = ById("nav-hidden5");
var ohidden6 = ById("nav-hidden6");
oShouji.onmouseenter = function(){
	ohidden1.style.display = "block"
}
