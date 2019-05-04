/**
 * *************************************************包含的 n 项斐波那契数列元素的数组**********************************************
 */
const fibonacci=n=>[...Array(n)].reduce(
    (acc,val,i)=>acc.concat(i>1?acc[i-1]+acc[i-2]:i),
    []
)
/**
 ******************************************************数组去重******************************************************
 */
let str = "12qwe345671dsfa233dsf9876ds243dsaljhkjfzxcxzvdsf";
		let  arrays=str.split("")
//利用set 没有重复的值
arrays=[...new Set(arrays)].join("");
//当map总有这个值就把他放到set中
var unique=(arr)=>{
    const seen=new Map();
    return (arr.filter((a)=>!seen.has(a)&&seen.set(a,1))).join("");
}
//先进行排序，每次Push到新数组中的 是重复项的第一个
var unique2=(arr)=>{
    let arrs=[];
    var  new_array=arr.sort();
    for(var i = 0; i < news_arry.length; i++) {
        if(news_arry[i] == news_arry[i + 1] && news_arry[i] != news_arry[i - 1]) {
            arrs.push(news_arry[i]);
        }

    }
    return arrs.join("");
}
//这个是用对象的key,value.key是唯一的。当发现这个值一斤共有了就再对应的value+1.这就会统计重复的个数
var unique3=(arr)=>{
    let obj={};
    for(var i=0;i<arr.length;i++){
        let key=arr[i];
        if(!obj[key]){
            obj[key]=1;
        }else{
            obj[key]+=1;
        }
    }
    return obj;
}
/**
 * **********************************************************有关input验证*******************************************************
 */
 <!--限制文本框只能输入正数-->
 <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"/>
 
 <!--限制文本框只能输入正数、小数-->
 <input type="text" onkeyup="this.value=this.value.replace(/[^\d.]/g,'')"/>

  <!--限制文本框只能输入正数、小数、负数-->
 <input type="text" onkeyup="this.value=this.value.replace(/[^\-?\d.]/g,'')"/>

