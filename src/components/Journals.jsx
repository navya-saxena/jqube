import React from 'react';

const Journals = () => {
  const journals = [
    'JANOLI International Journal of Mathematical Sciences (IIJMS)',
    'JANOLI International Journal of Sustainable Management and Development (IIJSMD)',
    'JANOLI International Journal of Data Science (IIJDS)',
    'JANOLI International Journal of Big Data (IIJBD)',
    'JANOLI International Journal of Electronics, Computer Sciences and Engineering (IIJECSE)',
    'JANOLI International Journal of Sciences and Technology (IIJST)',
    'JANOLI International Journal of Artificial Intelligence and Applications (IIJAIA)',
    'JANOLI International Journal of Physics (IIJP)',
  ];

  return (
    <div className="min-h-screen bg-navy-900 p-8 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Upcoming Journals</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <ul className="space-y-4">
          {journals.map((journal, index) => (
            <li
              key={index}
              className="text-xl text-navy-900 hover:bg-navy-300 transition-colors cursor-pointer p-2 rounded-lg"
            >
              {journal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journals;
