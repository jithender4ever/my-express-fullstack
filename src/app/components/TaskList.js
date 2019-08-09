import React from 'react';

const TaskList = ({tasks, group}) => (
    <ul>
        {tasks.map(t => (t.group === group.id && <li key={t.id}>{t.name}</li>))}
    </ul>
);

export default TaskList;
