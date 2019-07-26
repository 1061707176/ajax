let kits={}
kits.getUrlParams=function(){
    let arr=location.search.substring(1).split('&');
    let prams={}
    arr.forEach(e=>{
        let temp=e.split('=')
        let key=temp[0];
        let val=temp[1];
        prams[key]=val;

    })
    return prams;
}
let strategies={//非空函数
    isNonEmpty:function(val,msg){
        if(val.trim().length===0){
            return msg
        }
    },
    minLength:function(val,len,msg){
        if(val.trim().length<len){
            return msg
        }
    }
}
function Validator(){
    this.validateFuncs=[]
}
Validator.prototype.add=function(dom,arr){
    for(let i=0;i<arr.length;i++){
        let fn=function(){
            let rule=arr[i];
            let params=rule.fnName.split(':');
            let fnName=params.shift();
            console.log(fnName)
            params.unshift(dom.value);
            params.push(rule.errMsg)
            return strategies[fnName].apply(dom,params);

        }
        this.validateFuncs.push(fn)
    }
}
Validator.prototype.start=function(){
    for(let i=0 ; i<this.validateFuncs.length;i++){
        let msg=this.validateFuncs[i]()
        if(msg){
            return msg              
        }
    }
}