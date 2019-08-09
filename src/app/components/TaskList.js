import React from 'react';
import { connect } from 'react-redux';

const TaskList = ({tasks, id, name}) => (
    <div>
        {name}
        <ul>
            {tasks.map(t => <li key={t.id}>{t.name}</li>)}
        </ul>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    const group = ownProps.id;
  return {
      tasks: state.tasks.filter(t => t.group === group)
  }
};

export default connect(mapStateToProps)(TaskList);
