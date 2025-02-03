import React from 'react';
import { Trash2, RotateCcw } from 'lucide-react';

function MoodList({ moods, onDelete, onClear, onUndo, canUndo }) {
  if (moods.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No moods recorded yet. Start by adding your first mood!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Mood History</h2>
        <div className="flex gap-2">
          {canUndo && (
            <button
              onClick={onUndo}
              className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <RotateCcw size={16} />
              Undo
            </button>
          )}
          <button
            onClick={onClear}
            className="flex items-center gap-1 px-3 py-1 text-red-600 hover:text-red-700 transition-colors"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {moods.map(mood => (
          <div
            key={mood.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{mood.emoji}</span>
              <div>
                <p className="font-medium text-gray-800">{mood.text}</p>
                <p className="text-sm text-gray-500">{mood.timestamp}</p>
              </div>
            </div>
            <button
              onClick={() => onDelete(mood.id)}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodList;