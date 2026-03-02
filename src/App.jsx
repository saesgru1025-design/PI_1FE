import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import { taskService } from './services/api';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getTasks();
      // Map backend status to frontend CSS classes if needed, 
      // but let's assume we use backend strings directly
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      // Temporary hardcoded user_id for demonstration as per schema
      const activityData = {
        ...taskData,
        user_id: "00000000-0000-0000-0000-000000000000", // Placeholder
        due_date: taskData.due_date,
        type: 'estudio'
      };
      await taskService.createTask(activityData);
      loadTasks();
      setShowForm(false);
    } catch (error) {
      alert("Error al guardar: " + error.message);
    }
  };

  const toggleTaskStatus = async (id, currentStatus) => {
    try {
      await taskService.toggleActivityStatus(id, currentStatus);
      loadTasks();
    } catch (error) {
      alert("Error al actualizar: " + error.message);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">StudyClaner</h1>
        {!showForm && (
          <button className="btn-primary" onClick={() => setShowForm(true)}>
            <span>+</span> Nueva Actividad
          </button>
        )}
      </header>

      <main className="dashboard-grid">
        <section>
          {showForm && <TaskForm onAdd={handleAddTask} onCancel={() => setShowForm(false)} />}
          {loading ? <p>Cargando actividades...</p> : (
            <TaskList tasks={tasks} onToggleStatus={toggleTaskStatus} />
          )}
        </section>

        <aside>
          <Sidebar tasks={tasks} />
        </aside>
      </main>
    </div>
  );
}

export default App;
