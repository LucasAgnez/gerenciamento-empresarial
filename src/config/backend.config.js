const backend_host = import.meta.env.VITE_BACKEND_HOST || 'localhost';
const backend_port = import.meta.env.VITE_BACKEND_PORT || 8080;
const backend_url = "http://"+backend_host+":"+backend_port

const backend_config = {
    host: backend_host,
    port: backend_port,
    url: backend_url
}

export { backend_config };