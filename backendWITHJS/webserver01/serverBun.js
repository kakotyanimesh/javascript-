import {serve} from 'bun'


serve({
    fetch(request){
        const url = new URL(request.url)
        if(url.pathname === '/'){
            return new Response('hellow its ice tea', {status: 200})
        } else if(url.pathname === '/animes'){
            return new Response('weeed and code', {status: 200})
        } else {
            return new Response('404 not found', {status: 400})
        }
    }, 
    port: 3000,
    hostname: '127.0.0.1'
})