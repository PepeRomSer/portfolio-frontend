import { useEffect, useState } from 'react';
import { projectService } from '../services/projectService';
import { ProjectCard } from '../components/ProjectCard';

// Recibimos la prop "filterType" para saber qué mostrar
export function ProjectsPage({ filterType, title, subtitle }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const allProjects = await projectService.getAll();
        
        // AQUÍ ESTÁ LA MAGIA DEL FILTRO:
        // Comparamos el 'type' que viene de la base de datos con el que pide la página
        const filtered = allProjects.filter(p => p.type === filterType);
        
        setProjects(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    // Ejecutamos esto cada vez que cambie el "filterType" (al navegar en el menú)
  }, [filterType]);

  return (
    <div>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </header>

      {loading && <p className="text-center">Cargando...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!loading && projects.length === 0 && (
        <div className="text-center text-gray-500 py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p>No hay proyectos de este tipo todavía.</p>
        </div>
      )}
    </div>
  );
}