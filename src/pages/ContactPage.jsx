import { useState } from 'react';
import { contactService } from '../services/contactService';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(''); // Limpiar errores previos

    try {
      await contactService.send(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpiar form
    } catch (error) {
      console.error(error);
      setStatus('error');
      // Lógica para capturar el mensaje del Backend (Symfony/API Platform)
      if (error.response && error.response.data) {
        // Caso 1: Error de validación de API Platform (Violations)
        if (error.response.data.violations) {
            // Cogemos el primer error que encontremos
            const firstViolation = error.response.data.violations[0];
            setErrorMessage(`Error en ${firstViolation.propertyPath}: ${firstViolation.message}`);
        } 
        // Caso 2: Error genérico (detail)
        else if (error.response.data.detail) {
            setErrorMessage(error.response.data.detail);
        }
        else {
            setErrorMessage("Error desconocido en el servidor.");
        }
      } else {
        setErrorMessage("No se pudo conectar con el servidor.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Contáctame</h1>

      {status === 'success' ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
          <p className="font-bold">¡Mensaje enviado!</p>
          <p>Gracias por contactar. Te responderé pronto.</p>
          <button 
            onClick={() => setStatus('idle')} 
            className="mt-4 text-sm underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="¿En qué puedo ayudarte?"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
          
          {status === 'error' && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4 text-red-700">
                <p className="font-bold">Error de validación</p>
                <p>{errorMessage}</p>
            </div>
            )
          }
        </form>
      )}
    </div>
  );
}