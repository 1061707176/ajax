
function ajax(options){
    options=options||{}
    options.type=options.type||'get';
    options.url=options.url||'';
    options.data=options.data||'';  
    options.callback=options.callback||function(res){
        // alert('你滴毁掉寒素没有给,我们不建议这样干')
    }
    let xhr=new XMLHttpRequest()
if(options.type==='get'){
    options.url+='?'+options.data;
}
xhr.open(options.type,options.url);
if(options.type==='post'){
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(options.data)
}
else{
    xhr.send()
}
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status===200){
        options.callback(xhr.responseText)
    }
}
}

