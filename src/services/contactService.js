import api from './api';

export const contactService = {
    send: async (contactData) => {
        // contactData debe ser un objeto { name, email, message }
        const response = await api.post('/contact', contactData);
        return response;
    }
};