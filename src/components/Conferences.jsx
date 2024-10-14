import React from 'react';

const Conferences = () => {
  const conferences = [
    'International Conference on AI and ML',
    'Data Science and Big Data Conference',
    'Quantum Computing Conference',
    'Sustainable Tech Conference',
  ];

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Upcoming Conferences</h1>
      <ul className="space-y-4">
        {conferences.map((conference, index) => (
          <li key={index} className="text-xl text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            {conference}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conferences;
