import { useState } from 'react';

// Naya Data Structure: Ek subject ke andar 'papers' ka array hai jisme multiple links aa sakte hain
const pyqData = [
  { 
    id: 1, 
    subject: "Engineering Chemistry", 
    code: "CHY1001", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/19nUJNqDNPaUa29CJeFbg4k9lcTcpTUYN/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1JtmIJ-eVOPOm4-IX0AToN1yueDyjb4RA/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1VCVn-oNGT0XzFyWJVjZx3lJMziltAkU1/view?usp=sharing" },
      { name: "Paper 4", type: "Mid Term", link: "https://drive.google.com/file/d/1tJ6oXEolikBYLyFdm1TW4uvJiUT-wK0J/view?usp=sharing" }
    ]
  },
  { 
    id: 2, 
    subject: "Environmental Sustainability", 
    code: "CHY1006", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1g1wjWmlka0z_C2ALx1w2DEfvf_wTE84U/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1fG-4rOaV0XIm6eN-6EEA9ZW1mBEBtGbw/view?usp=sharing" }
    ]
  },
  { 
    id: 3, 
    subject: "Fundamentals of AI and ML", 
    code: "CSA2001", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1uJXLCp795NOM4Y5dIpuYRVhuwu_B07gD/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1f3bN-dV1zVhfkZD56dL2jUig9woa4pIS/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1gwUL3aJy0hhSHUCQnaPcj-soKy_R2pKk/view?usp=sharing" }
    ]
  },
  { 
    id: 4, 
    subject: "Introduction to Problem Solving and Programming", 
    code: "CSE1021", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/128kwuH1g82OTG1ByJ2VrWjJVFdOVY2NG/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1Z8Ht-xi4tve2i-fS3b6jLkk6JT4T82RI/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1oAhpIpT0YtxrOMqvZAOq06N9u8QNYvS_/view?usp=sharing" }
    ]
  },
  { 
    id: 5, 
    subject: "Data Structures and Algorithms", 
    code: "CSE2002", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1kGLOTCsB9Nk3FJj2feXUZZu7rkS0x2WU/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1RtZfx9_2ic5eYOYWvcXfoURtJjGSTGc-/view?usp=sharing" }
    ]
  },
  { 
    id: 6, 
    subject: "Python Programming", 
    code: "CSE3011", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1QPYQR_XNjGAjXHySwDZVgXlE4GwE9SIR/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1_V5fS-zip1dkWwLup_nCNoG6d0u2Ljne/view?usp=sharing" }
    ]
  },
  { 
    id: 7, 
    subject: "Electromagnetic Theory & Transmission Lines", 
    code: "EAC2002", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1Xk7OpzO6BekMystqLCbpQTa_lEO-h0iU/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1Ljpsg6q6FcnyMC3Je3XPqjILlinPHr0m/view?usp=sharing" }
    ]
  },
  { 
    id: 8, 
    subject: "Analog Electronics", 
    code: "EAC1002", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1cP8oXsygLCRxLJkmRaFI5dXuUtPmqMop/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1j3W1jON5vIjwQGTood6qhEmmvpOWApFU/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1qELVlv5swSCX4z0S-2ghpnqbTKTCFnFR/view?usp=sharing" }
    ]
  },
  { 
    id: 9, 
    subject: "Digital Logic Design", 
    code: "ECE2002", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1JamP5uqH6Zel-L3eCNX8LP-vWgyd-hOQ/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1jRXaKQOfA9adYrHkui8dMn7aQXFZZO5Y/view?usp=sharing" },
      { name: "Paper 3", type: "Supplementary", link: "https://drive.google.com/file/d/1O8MfVk3RIOtBTDEnjjVShBwED0PcE0V2/view?usp=sharing" }
    ]
  },
  { 
    id: 10, 
    subject: "Signals and Systems", 
    code: "ECE2003", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1gfUopilOdvSlfG0LyqUhR8yJw93dorEh/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1GEqAv2_cXDy9XQO6QolaA7FemwQaHyHQ/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1bj1kHITrzL-srTpRkZ1Fz44C0MjxBOUF/view?usp=sharing" }
    ]
  },
  { 
    id: 11, 
    subject: "Microprocessors & Microcontrollers", 
    code: "ECE3004", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/13uBlJuGI96VbusgAr7SetohwwNDMZO6n/view?usp=sharing" }
    ]
  },
  { 
    id: 12, 
    subject: "Electric Circuits and Systems", 
    code: "EEE1001", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/15MJMotDk__o8qKWoEPrYFHsH3LTRXP5P/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1sSsiIUO-b68HZncw5j2LetJ8EBPOY7eK/view?usp=sharing" },
      { name: "Paper 3", type: "Supplementary", link: "https://drive.google.com/file/d/17Nf0Zb5WP4LGLRwLCuJkvZPEp35-RaCd/view?usp=sharing" },
      { name: "Paper 4", type: "Term End", link: "https://drive.google.com/file/d/1bRBjlrN7CHIkBtb7d-E4tDc90vECsm3n/view?usp=sharing" }
    ]
  },
  { 
    id: 13, 
    subject: "Network Analysis", 
    code: "EEE2001", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1HujRsUNujDmOl7lqWD_PhhjcvMyfcWLN/view?usp=sharing" },
    ]
  },
  { 
    id: 14, 
    subject: "Effective Technical Communication", 
    code: "ENG1004", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1-ZepXIKgF_8x0QmVjdL7nCTSEAuEjk7E/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1NFXnIcjrT19V1LXAFo1OgDIU0wTygo3t/view?usp=sharing" }
    ]
  },
  { 
    id: 15, 
    subject: "Control Systems", 
    code: "EEE3003", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1McSdR0zG5ozS3-kbxBi_JCaoPzD9QabQ/view?usp=sharing" },
    ]
  },
  { 
    id: 16, 
    subject: "Advance Technical Communication", 
    code: "ENG2005", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1ub4V3iUCUwch0p7E1OjI9LKeNL9yu8gD/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1731-7Uh8_M9DeCXKLLZOT1JgGFAXIvQ8/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1CEnLAZP37u1M4F5bdx5NF4u22BP0OZIE/view?usp=sharing" }
    ]
  },
  { 
    id: 17, 
    subject: "Emotional Intelligence", 
    code: "HUM1002", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1AhIpWRAGgSAO2eQEIu5A1yC-4PQcZe2Y/view?usp=sharing" }
    ]
  },
  { 
    id: 18, 
    subject: "Calculus", 
    code: "MAT1003", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/11ErOxaf4FduTxCx1wV6Ye5XDApeSmcRO/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1QMqtep-bz93cNGPgt6VQRzOF7mqG3D9a/view?usp=sharing" }
    ]
  },
  { 
    id: 19, 
    subject: "Differential and Difference Equation", 
    code: "MAT2001", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1D2yE3NnSaLSkvZ3tWniUBCgvbqM2h4Al/view?usp=sharing" }
    ]
  },
  { 
    id: 20, 
    subject: "Discrete Mathematics and Graph Theory", 
    code: "MAT2002", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1y54z6O6FSoCM1phjDlntyq5bW3-DWkgr/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/17Q4fRAo5-owQwpoYWTUrHoQ8w16EHeLW/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1HKHbu4SgeyQlT8GKkhKzh81q4UCswhWq/view?usp=sharing" },
      { name: "Paper 4", type: "Supplementary", link: "https://drive.google.com/file/d/1_FKZ26pV_P6S9UtnLoaTJUK2JP9Y7CGn/view?usp=sharing" }
    ]
  },
  { 
    id: 21, 
    subject: "Transform Techniques and Difference Equations", 
    code: "MAT2005", 
    papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1QGbvteOurJRo0NAihe5RQ0g0KCUIGuv6/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1Fcbw6Eid4N_MMTgM_IvCDZIXt2SONe27/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1dy6JjCWaayf5EolywwFjqxcJCIFMyu1_/view?usp=sharing" }
    ]
  },
  { 
    id: 22, 
    subject: "Applied Linear Algebra", 
    code: "MAT3002", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1jX93VTK8lwzei3JqhOxf9L0OEH2x6T2L/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1x8HYAxl0iw5HfHi_g_Jqj1Dd98TsQOh_/view?usp=sharing" }
    ]
  },
  { 
    id: 23, 
    subject: "Probability Statistics and Reliability", 
    code: "MAT3003", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1WlQl-VvV9ugnU-zwx23w1Esx5Gtb9Gn5/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1wiMMVTa0tt75TWsMHDD61vWvibwVl4NU/view?usp=sharing" }
    ]
  },
  { 
    id: 24, 
    subject: "Random Process", 
    code: "MAT3004", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1jNEx0eYLDySODCLBs1YsKxirUiy2n5si/view?usp=sharing" }
    ]
  },
  { 
    id: 25, 
    subject: "Engineering Design and Modelling", 
    code: "MEE2014", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1H34WF1cwCJJli37on3fgnYOnl1mP0Mam/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1xYyIuaFvSBzc_xakElmePNMUQAYpQFeF/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1xFZdaiy3kAhMzmiGRwt0IrjGrYhAWnn1/view?usp=sharing" }
    ]
  },
  { 
    id: 21, 
    subject: "Engineering Physics", 
    code: "PHY1001", 
    papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1-1n0ijJEiSzUhP85LkASPJbRd0-kGO7F/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1ri16064jiPgrRmHakk048QzBVwVFcvkM/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/143oieHKEIJlQPLq87FvUipeKL-8wVaeS/view?usp=sharing" },
      { name: "Paper 4", type: "Supplementary", link: "https://drive.google.com/file/d/1gSRnflQNJxXwW528XCRFLRt-Prrv4Le_/view?usp=sharing" }
    ]
  },
];

export default function PYQDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = pyqData.filter((item) => {
    return (
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-6 mb-16 mt-8">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 sm:p-10">
        
        {/* Header & Search */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              📝 PYQs & Study Material
            </h2>
            <p className="text-slate-600 font-medium">
              Search subjects and download their previous year question papers.
            </p>
          </div>
          
          <div className="w-full md:w-96 relative">
            <input
              type="text"
              placeholder="Search by subject name or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3.5 bg-white/80 border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition pl-12"
            />
            <span className="absolute left-4 top-3.5 text-xl">🔍</span>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              >
                {/* Subject Header */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-lg">
                    {item.code}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">
                    {item.subject}
                  </h3>
                </div>
                
                {/* Papers List for this Subject */}
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Available Papers</p>
                  
                  {item.papers.map((paper, index) => (
                    <a 
                      key={index}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-4 py-2.5 rounded-xl transition duration-200 group"
                    >
                      <span className="font-semibold text-slate-700 group-hover:text-blue-700 text-sm">
                        {paper.name} • {paper.type}
                      </span>
                      <span className="text-lg opacity-60 group-hover:opacity-100 transition">📥</span>
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 font-medium">
              No subjects found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}