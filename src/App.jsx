import React, { useState, useEffect } from "react";
import {
  Smile,
  Frown,
  Meh,
  Trash2,
  RotateCcw,
  X,
  BarChart2,
} from "lucide-react";
import MoodEntry from "./components/MoodEntry";
import MoodList from "./components/MoodList";
import Analytics from "./components/Analytics";
import Modal from "./components/Modal";
import Toast from "./components/Toast";

const MOODS = [
  { emoji: "😊", text: "Happy", icon: Smile },
  { emoji: "😐", text: "Neutral", icon: Meh },
  { emoji: "😢", text: "Sad", icon: Frown },
];

function App() {
  const [moods, setMoods] = useState(() => {
    const saved = localStorage.getItem("moods");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTab, setActiveTab] = useState("list");
  const [deletedMood, setDeletedMood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  const addMood = (emoji, text) => {
    const newMood = {
      id: Date.now().toString(),
      emoji,
      text,
      timestamp: new Date().toLocaleString(),
    };
    setMoods([newMood, ...moods]);
    showToast("Mood added successfully!");
  };

  const deleteMood = (id) => {
    const moodToDelete = moods.find((mood) => mood.id === id);
    if (moodToDelete) {
      setDeletedMood(moodToDelete);
      setMoods(moods.filter((mood) => mood.id !== id));
      showToast("Mood deleted. Click undo to restore.");
    }
  };

  const clearMoods = () => {
    setDeletedMood(null);
    setMoods([]);
    setShowModal(false);
    showToast("All moods cleared!");
  };

  const undoDelete = () => {
    if (deletedMood) {
      setMoods([deletedMood, ...moods]);
      setDeletedMood(null);
      showToast("Last action undone!");
    }
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Mood Tracker
          </h1>

          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "list"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Mood List
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === "analytics"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              Analytics
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {activeTab === "list" && (
              <>
                <MoodEntry moods={MOODS} onAdd={addMood} />
                <MoodList
                  moods={moods}
                  onDelete={deleteMood}
                  onClear={() => setShowModal(true)}
                  onUndo={undoDelete}
                  canUndo={!!deletedMood}
                />
              </>
            )}
            {activeTab === "analytics" && <Analytics moods={moods} />}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={clearMoods}
        title="Clear All Moods"
        message="Are you sure you want to clear all mood entries? This action cannot be undone."
      />

      {/* Toast */}
      <Toast show={toast.show} message={toast.message} />
    </div>
  );
}

export default App;
