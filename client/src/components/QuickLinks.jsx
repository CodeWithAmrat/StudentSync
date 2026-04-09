export default function QuickLinks() {
  const links = [
    {
      id: 1,
      title: 'VTOP Portal',
      description: 'Access your academic information and grades',
      url: 'https://vtop.vitbhopal.ac.in/vtop/open/page',
      icon: '🎓',
    },
    {
      id: 2,
      title: 'Library',
      description: 'Access library resources and books',
      url: '#library',
      icon: '📚',
    },
    {
      id: 3,
      title: 'Student Dashboard',
      description: 'View your upcoming classes and assignments',
      url: '#dashboard',
      icon: '📊',
    },
    {
      id: 4,
      title: 'Feedback',
      description: 'Share your feedback and suggestions',
      url: '#feedback',
      icon: '💬',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Quick Links
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Access important resources at a glance
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                  {link.description}
                </p>
                <div className="mt-4 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
