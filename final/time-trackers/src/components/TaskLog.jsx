import React from "react";

function TaskLog({ log, onDelete, deletingTask, showJiraFormat }) {
  return (
    <div className="task-log">
      <h2 className="secondary">Task Log</h2>
      <div className="log-entries">
        {log.map((task, index) => (
          <div
            key={task.id}
            className={`log-row ${index === 0 ? "log-enter" : ""} ${
              deletingTask === task ? "deleting" : ""
            }`}
          >
            <span className="log-task">{task.name}</span>
            <span className="log-duration">
              {showJiraFormat ? task.jiraDuration : task.duration}{" "}
            </span>
            <span className="log-date">{task.date}</span>
            <button
              className="delete-button"
              onClick={() => onDelete(task)}
              aria-label={`Delete task ${task.name}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskLog;
