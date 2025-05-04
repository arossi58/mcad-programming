import React from "react";

function TimerInput({
  taskName,
  setTaskName,
  isRunning,
  startTimer,
  stopTimer,
}) {
  return (
    <div className="timer-input flex-col">
      <label htmlFor="task" className="flex-col">
        Task Name
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && taskName && !isRunning) {
              startTimer();
            }
          }}
          disabled={isRunning}
        />
      </label>
      <p className={`helper-text ${!taskName && !isRunning ? "visible" : ""}`}>
        A task name is required to begin
      </p>
      <div className="button-group">
        <button
          className="start-button"
          onClick={startTimer}
          disabled={isRunning || !taskName}
        >
          Start
        </button>
        <button
          className="stop-button"
          onClick={stopTimer}
          disabled={!isRunning}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default TimerInput;
