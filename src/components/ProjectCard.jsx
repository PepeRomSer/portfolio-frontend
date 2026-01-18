export function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Backend Project
            </div>
            <a href={project.url} target="_blank" rel="noreferrer" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {project.title}
            </a>
            <p className="mt-2 text-gray-500">
                {project.description}
            </p>
            <div className="mt-4 flex gap-2">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
                    #Symfony
                </span>
                <span className="inline-block bg-indigo-50 rounded-full px-3 py-1 text-xs font-semibold text-indigo-600">
                    #Hexagonal
                </span>
            </div>
        </div>
    );
}