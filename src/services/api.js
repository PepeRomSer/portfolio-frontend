import axios from 'axios';

const api = axios.create({
    // Asegúrate de que el puerto sea el correcto (8000 o el que uses)
    baseURL: 'http://127.0.0.1:8000/api', 
    headers: {
        'Content-Type': 'application/ld+json', // Cambiado a ld+json
        'Accept': 'application/ld+json'        // Cambiado a ld+json (Esto arregla el 406)
    }
});

export default api;