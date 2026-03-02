import React from 'react';

const Sidebar = ({ tasks }) => {
    const completedCount = tasks.filter(t => t.status === 'completada').length;
    const inProgressCount = tasks.filter(t => t.status === 'en progreso').length;
    const todoCount = tasks.filter(t => t.status === 'pendiente').length;

    return (
        <div className="glass-card sidebar-section">
            <h2>Estadísticas</h2>

            <div className="stats-grid">
                <div className="glass-card stat-box">
                    <span className="value">{tasks.length}</span>
                    <span className="label">Total</span>
                </div>
                <div className="glass-card stat-box">
                    <span className="value">{completedCount}</span>
                    <span className="label">Listas</span>
                </div>
                <div className="glass-card stat-box">
                    <span className="value">{inProgressCount}</span>
                    <span className="label">En curso</span>
                </div>
                <div className="glass-card stat-box">
                    <span className="value">{todoCount}</span>
                    <span className="label">Pendientes</span>
                </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h3>Progreso Semanal</h3>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                        width: `${(completedCount / tasks.length) * 100}%`,
                        height: '100%',
                        background: 'var(--primary)',
                        transition: 'width 0.5s ease'
                    }}></div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    {Math.round((completedCount / tasks.length) * 100)}% de tus metas alcanzadas
                </p>
            </div>

            <div style={{ marginTop: '3rem', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
