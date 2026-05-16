import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="section-container py-20 fade-in">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Full Stack Developer | Creative Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
