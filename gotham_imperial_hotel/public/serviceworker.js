self.addEventListener('fetch',function(){
    console.log('获取请求:',event.request.url)
})