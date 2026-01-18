import api from './api';

export const projectService = {
    getAll: async () => {
        const response = await api.get('/projects');
        
        console.log("📦 Estructura recibida:", response.data);

        // OPCIÓN 1: Tu caso actual (JSON-LD limpio)
        if (response.data && response.data.member) {
            return response.data.member;
        }

        // OPCIÓN 2: El estándar clásico de API Platform (por si cambia en el futuro)
        if (response.data && response.data['hydra:member']) {
            return response.data['hydra:member'];
        }

        // OPCIÓN 3: Array directo (JSON simple)
        if (Array.isArray(response.data)) {
            return response.data;
        }

        console.warn("⚠️ No se encontró la lista de proyectos en la respuesta");
        return [];
    }
};