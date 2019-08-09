import React from "react";
import { connect } from 'react-redux';
import TaskList from "./TaskList";

export const Dashboard = ({groups, tasks}) => (
    <div>
        <h2>Dashboard</h2>
        <ul>
            {groups.map(g => <TaskList id={g.id} name={g.name}/>)}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        groups: state.groups,
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(Dashboard);
