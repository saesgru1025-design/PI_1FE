import React from 'react';

const TaskItem = ({ task, onToggle }) => {
    return (
        <div className="glass-card task-card" onClick={() => onToggle(task.id, task.status)}>
            <div className="task-info">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem', display: 'block' }}>
                    Vence: {task.due_date}
                </span>
            </div>
            <div>
                <span className={`badge badge-${task.status.replace(' ', '')}`}>
                    {task.status === 'pendiente' ? 'Pendiente' :
                        task.status === 'en progreso' ? 'En Progreso' : 'Completada'}
                </span>
            </div>
        </div>
    );
};

const TaskList = ({ tasks, onToggleStatus }) => {
    return (
        <div className="task-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Tus Actividades</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Haz clic para cambiar estado</span>
            </div>
            {tasks.length > 0 ? (
                tasks.map(task => <TaskItem key={task.id} task={task} onToggle={onToggleStatus} />)
            ) : (
                <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                    No hay tareas pendientes. ¡Buen trabajo!
                </p>
            )}
        </div>
    );
};

export default TaskList;
