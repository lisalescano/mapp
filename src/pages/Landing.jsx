import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">GeoReport</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Reporta problemas en tu ciudad
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Plataforma colaborativa para mejorar tu comunidad
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/form"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Crear reporte
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Conoce más
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Reportes en tiempo real",
              description: "Visualiza problemas reportados en tu área",
              icon: "📍"
            },
            {
              name: "Seguimiento",
              description: "Monitorea el estado de tus reportes",
              icon: "📊"
            },
            {
              name: "Comunidad",
              description: "Colabora con otros ciudadanos",
              icon: "👥"
            }
          ].map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GeoReport. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}