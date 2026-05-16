export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full stack application with API integration',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
  ]

  return (
    <div className="section-container py-20 fade-in">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
