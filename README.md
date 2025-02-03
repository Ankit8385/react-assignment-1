# Mood Tracker Application

## Overview
The Mood Tracker is a React-based application designed to help users log their moods with timestamps, view mood history, and analyze mood trends. The application is built using Tailwind CSS for styling and supports CRUD operations along with advanced UI features for an enhanced user experience.

---

## Features

### Level 1: The Warm-up Challenge
#### Objective:
Build a basic Mood Tracker covering core React concepts and Tailwind CSS styling.

#### Functionality:
- **Mood Entry Creation:**
  - Users select a mood emoji from a dropdown list (e.g., 😊, 😒, 😢).
  - Display the selected mood below the dropdown, including:
    - Date (current date and time, including seconds)
    - The selected emoji
    - Mood description (e.g., "Happy")

  **Example:**
  ```
  3/2/2025 6:30:59 😊 Happy
  ```

- **Mood List:**
  - Render all mood entries in a list format.

- **Global Clear Button:**
  - A "Clear" button appears when at least one mood entry is present.
  - Clicking the button clears all moods from the list.

- **UI and Styling:**
  - Use Tailwind CSS for clean and responsive UI design.

---

### Level 2: For Adventurers
#### Objective:
Enhance the application by introducing CRUD operations and richer UI components.

#### Additional Features:
- **Individual Mood Deletion:**
  - Users can delete specific mood entries from the list.
  - The UI updates accordingly.

- **Undo Logic:**
  - Implement an "Undo" feature to revert the last deletion or action.
  - Maintain a history of changes to restore deleted entries.

- **Tabbed Interface:**
  - **Tabs Component:** A switcher for different views.
  - **Mood List Tab:** Displays all mood entries with options to delete or undo actions.
  - **Mood Analytics Tab:** Placeholder for analytics (expanded in Level 3).
  - **UI Enhancements:** Clearly styled tabs with active state indicators and smooth transitions.

---

### Level 3: Already a PRO!
#### Objective:
Introduce advanced UI components and data visualization for analytics.

#### Advanced Features:
- **Local Persistence:**
  - Store mood entries in `localStorage` to persist across page refreshes.

- **Mood Analytics Dashboard:**
  - **Charts and Graphs:**
    - Use a charting library (e.g., Chart.js or Recharts) to visualize mood trends.
    - Display mood frequency using bar or pie charts.

- **Extra UI/UX Enhancements:**
  - **Modal Dialogs:**
    - Confirm critical actions (e.g., clearing all moods) using modals.
  - **Animated Notifications:**
    - Provide visual feedback using `react-toastify` or custom animations for actions like adding, updating, or deleting moods.

---

## Tech Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Data Visualization:** Chart.js / Recharts (for analytics)
- **Notifications:** React-Toastify (for enhanced user feedback)
- **Persistence:** LocalStorage (to retain data across sessions)

---

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/mood-tracker.git
   cd mood-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000/` in your browser to access the app.

---

## Contributing
Feel free to contribute by submitting pull requests or raising issues.

---

## License
This project is licensed under the MIT License.

