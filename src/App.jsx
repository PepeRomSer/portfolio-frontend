import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* El Navbar está fuera de Routes para que se vea SIEMPRE */}
        <Navbar />

        <main className="max-w-5xl mx-auto px-6 pb-12">
          <Routes>
            {/* Ruta 1: Home / Sobre Mí */}
            <Route path="/" element={<HomePage />} />

            {/* Ruta 2: Proyectos Laborales */}
            <Route 
              path="/laboral" 
              element={
                <ProjectsPage 
                  filterType="job" 
                  title="Experiencia Laboral" 
                  subtitle="Proyectos desarrollados en empresas" 
                />
              } 
            />

            {/* Ruta 3: Proyectos Freelance */}
            <Route 
              path="/freelance" 
              element={
                <ProjectsPage 
                  filterType="freelance" 
                  title="Proyectos Personales" 
                  subtitle="Trabajos freelance y Open Source" 
                />
              } 
            />

            {/* Ruta 4: Contacto (De momento un texto simple) */}
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;