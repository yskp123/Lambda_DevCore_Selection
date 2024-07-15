# Todo Application

A simple React-based Todo List application that allows users to add, edit, complete, and delete tasks. The application uses local storage to persist tasks across sessions.

## Features

- Add new tasks with a title and description.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks from the todo list or completed list.
- Persist tasks in local storage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yskp123/Lambda_DevCore_Selection.git
2. Navigate into the project directory:
   ```bash
   cd todo-app
3. Install dependencies:
   ```bash
   npm install
   npm install react-icons

## Usage

1. Start the development server:
   ```bash
   npm start
2. Open your browser and navigate to:
    ```bash
    http://localhost:3000

## File Structure

- 'public/' - Public assets including the HTML file.
- src/ - Source files for the React application.
   - App.js - Main component containing the todo app logic.
   - App.css - Styling for the application.

 ## Code Overview
 ### App.js
 **App.js** is the main component of the application responsible for managing the state and logic of the todo list. It utilizes several React hooks such as `useState` and `useEffect`.

#### State Variables:

- **isCompleteScreen**: Boolean to toggle between the todo and completed screens.
- **allTodos**: Array to store the list of todo tasks.
- **newTitle**: String to store the title of a new task.
- **newDescription**: String to store the description of a new task.
- **completedTodos**: Array to store the list of completed tasks.
- **isEditing**: Boolean to track if a task is being edited.
- **currentIndex**: Number to store the index of the task being edited.

#### Functions:

- **handleAddTodo**: Adds or updates a task in the todo list.
- **handleDeleteTodo**: Deletes a task from the todo list.
- **handleDeleteCompletedTodo**: Deletes a task from the completed list.
- **handleEditTodo**: Edits a task in the todo list.
- **handleComplete**: Marks a task as completed and moves it to the completed list.
- **useEffect**: Loads the saved tasks from local storage when the component mounts.

### App.css

**App.css** provides the styling for the application, including styles for the body, main container, headers, input fields, buttons, and todo list items.

### Local Storage

The application uses the browser's local storage to persist tasks. Tasks are saved under the following keys:
- **todolist**: Stores the list of todo tasks.
- **completedTodos**: Stores the list of completed tasks.
## Ideas for Potential Future Extensions
### 1. User Authentication and Cloud Sync
Implement user authentication to allow multiple users to manage their own todo lists. Integrate cloud storage (e.g., Firebase) for real-time sync across devices.
### 2. Task Categories and Filters
Add support for categorizing tasks (e.g., work, personal) and filtering tasks based on categories or due dates.
### 3. Reminders and Notifications
Incorporate reminder functionality to notify users of upcoming tasks or deadlines. This could include email or push notifications.
### 4. Collaborative Task Management
Enable users to share tasks or lists with collaborators, allowing for collaborative task management.
### Justification for Choosing the Project
The Todo List application was chosen for its practicality and educational value:
- **Practical Use**: Task management is a fundamental organizational tool useful in both personal and professional contexts.
- **Learning Experience**: Building a todo list involves foundational concepts in web development, such as state management, CRUD operations, and user interface design.
- **Scalability**: The project allows for gradual expansion and integration of more advanced features, making it suitable for learning and experimentation.
By implementing and extending the project's features, users can experience a comprehensive task management system while learning and applying essential web development skills.

