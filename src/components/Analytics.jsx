import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28BFE",
  "#FF5678",
];

function Analytics({ moods }) {
  const moodCounts = moods.reduce((acc, mood) => {
    acc[mood.text] = (acc[mood.text] || 0) + 1;
    return acc;
  }, {});

  const total = moods.length;
  const moodData = Object.entries(moodCounts).map(([mood, count], index) => ({
    name: mood,
    value: count,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Mood Analytics</h2>

      {total === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No mood data available yet. Start tracking your moods to see
          analytics!
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-4">Mood Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={moodData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <div className="space-y-2">
              <p className="text-gray-700">Total entries: {total}</p>
              <p className="text-gray-700">
                Most frequent mood:{" "}
                {
                  Object.entries(moodCounts).reduce((a, b) =>
                    a[1] > b[1] ? a : b
                  )[0]
                }
              </p>
              <p className="text-gray-700">
                Last recorded: {moods[0]?.timestamp || "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analytics;
