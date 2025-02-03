import React from 'react';

function Toast({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
      {message}
    </div>
  );
}

export default Toast;