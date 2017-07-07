
//三级联动表
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();
dsy.add("0",["整车","配件"]);
dsy.add("0_0_0",["纯电动","插电混动","增程式电动","混合动力","燃料电池"]);
dsy.add("0_0",["电动乘用车","电动客车","微型电动车"]);
dsy.add("0_0_1",["纯电动","插电混动","增程式电动","混合动力","燃料电池"]);
dsy.add("0_0_2",["纯电动","插电混动","增程式电动","混合动力","燃料电池"]);
//dsy.add("0_3_0",["纯电动","插电混动","增程式电动","混合动力","燃料电池"]);
dsy.add("0_1",["标准件","辅助件","车身系统","电气系统","转向系统","底盘系统","内饰系统","密封系统"]);
dsy.add("0_1_0",[" "]);
dsy.add("0_1_1",[" "]);
dsy.add("0_1_2",[" "]);
dsy.add("0_1_3",[" "]);
dsy.add("0_1_4",[" "]);
dsy.add("0_1_5",[" "]);
dsy.add("0_1_6",[" "]);
dsy.add("0_1_7",[" "]);
dsy.add("0",["整车","配件"]);
var s=["s_main","s_sub","s_last"];//三个select的name
var opt0 = ["请选择","请选择","请选择"];//初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}