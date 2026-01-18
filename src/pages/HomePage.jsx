export function HomePage() {
  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <div className="mb-6">
        {/* Puedes poner aquí una foto tuya en /public y usar <img src="/tu-foto.jpg" ... /> */}
        <div className="w-32 h-32 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-4xl">
          👨‍💻
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Hola, soy <span className="text-indigo-600">Tu Nombre</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Desarrollador Full Stack especializado en Symfony y React.
        Me apasiona la arquitectura de software limpia y crear productos escalables.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Datos Personales</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>📍 Ubicación:</strong> Madrid, España</li>
          <li><strong>📧 Email:</strong> contacto@ejemplo.com</li>
          <li><strong>💼 Experiencia:</strong> +5 años en desarrollo web</li>
          <li><strong>🛠 Tech Stack:</strong> PHP 8, Symfony 7, React, Docker, MySQL</li>
        </ul>
      </div>
    </div>
  );
}