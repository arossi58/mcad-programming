import React from "react";

function TimerInput ({taskName, setTaskName, isRunning, startTimer, stopTimer}) {
    return(
        <div className="timer-input">
            <label htmlFor="task">Task Name</label>
            <input 
            type="text" 
            placeholder="Task Name" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            disabled={isRunning}
            />
            <div className="button-group">
                <button className="start-button" onClick={startTimer} disabled={isRunning || !taskName}>
                    Start
                </button>
                <button className="stop-button" onClick={stopTimer} disabled={!isRunning}>
                    Stop
                </button>
            </div>
        </div>
    )
}

export default TimerInput;