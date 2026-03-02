const API_URL = import.meta.env.VITE_API_URL;

export const taskService = {
    async getTasks() {
        const response = await fetch(`${API_URL}activities/`);
        if (!response.ok) throw new Error('Error al obtener actividades');
        return response.json();
    },

    async createTask(activityData) {
        // Mapping frontend fields to DB schema
        const payload = {
            title: activityData.title,
            description: activityData.description,
            due_date: activityData.due_date,
            status: activityData.status || 'pendiente',
            priority: activityData.priority || 3,
            type: activityData.type || 'tarea',
            user_id: activityData.user_id // Note: In a real app, this comes from Auth
        };

        const response = await fetch(`${API_URL}activities/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('Error al crear actividad');
        return response.json();
    },

    async toggleActivityStatus(id, currentStatus) {
        const nextStatus = currentStatus === 'pendiente' ? 'en progreso' :
            currentStatus === 'en progreso' ? 'completada' : 'pendiente';

        const response = await fetch(`${API_URL}activities/${id}/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: nextStatus }),
        });
        if (!response.ok) throw new Error('Error al actualizar estado');
        return response.json();
    }
};
