import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickLinks() {
  const links = [
    {
      title: 'VTOP Portal',
      description: 'Official Student Portal',
      url: 'https://vtop.vitbhopal.ac.in/vtop/open/page',
      icon: '🎓',
      bgStyle: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      textStyle: 'text-blue-700',
      isInternalPage: false
    },
    {
      title: 'Faculty & Library',
      description: 'Search faculty cabins and contacts',
      url: '/directory',
      icon: '📚',
      bgStyle: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
      textStyle: 'text-emerald-700',
      isInternalPage: true
    },
    {
      title: 'PYQs Archive',
      description: 'Download previous year question papers',
      url: '/pyqs',
      icon: '📝',
      bgStyle: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
      textStyle: 'text-rose-700',
      isInternalPage: true
    },
    {
      title: 'SGPA Calculator',
      description: 'Calculate your semester GPA instantly',
      url: '/sgpa-calculator',
      icon: '🧮',
      bgStyle: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
      textStyle: 'text-orange-700',
      isInternalPage: true
    },
    {
      title: 'GPA Target Planner',
      description: 'Plan your required SGPA for your target CGPA',
      url: '/gpa-improver',
      icon: '📈',
      bgStyle: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
      textStyle: 'text-indigo-700',
      isInternalPage: true
    },
    {
      title: 'Feedback',
      description: 'Share your feedback and suggestions',
      url: '/#feedback-section',
      icon: '💬',
      bgStyle: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
      textStyle: 'text-purple-700',
      isInternalPage: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-4">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">🚀 Quick Links</h2>
        <p className="text-slate-600 mt-3 font-medium">Access your essential university tools and resources in one click.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => {
          
          const cardDesign = (
            <>
              <div className="text-5xl mb-4 drop-shadow-sm">{link.icon}</div>
              <h3 className={`font-bold text-xl mb-2 ${link.textStyle}`}>{link.title}</h3>
              <p className="text-sm text-center text-slate-600 font-medium leading-relaxed">{link.description}</p>
            </>
          );

          const cardClasses = `flex flex-col items-center p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${link.bgStyle} cursor-pointer`;

          if (link.isInternalPage) {
            return (
              <Link key={index} to={link.url} className={cardClasses}>
                {cardDesign}
              </Link>
            );
          }

          return (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={cardClasses}
            >
              {cardDesign}
            </a>
          );
        })}
      </div>
    </div>
  );
}