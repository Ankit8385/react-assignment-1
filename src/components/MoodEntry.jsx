import React, { useState } from 'react';

function MoodEntry({ moods, onAdd }) {
  const [selectedMood, setSelectedMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMood) {
      const mood = moods.find(m => m.emoji === selectedMood);
      onAdd(mood.emoji, mood.text);
      setSelectedMood('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">How are you feeling?</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <select
          value={selectedMood}
          onChange={(e) => setSelectedMood(e.target.value)}
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a mood...</option>
          {moods.map(mood => (
            <option key={mood.text} value={mood.emoji}>
              {mood.emoji} {mood.text}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Add Mood
        </button>
      </form>
    </div>
  );
}

export default MoodEntry;