import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const requestHandler = (req) => {
    const { pathname } = new URL(req.url)
    switch(pathname) {
        case '/':
            return new Response("Hello from /")
        case '/users':
            const url = new URL(req.url)
            const q = url.searchParams.get('name')
            return new Response(JSON.stringify({data: q}))
        default:
            return new Response('Ruta no válida')
    }
}

serve(requestHandler, {port: 8080})