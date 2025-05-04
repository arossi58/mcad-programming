import React, { useState, useEffect, useRef } from "react";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import TaskLog from "./components/TaskLog";

import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showJiraFormat, setShowJiraFormat] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [log, setLog] = useState([]);
  const intervalRef = useRef(null);
  const [deletingTask, setDeletingTask] = useState(null);
  const handleDelete = (taskToDelete) => {
    setDeletingTask(taskToDelete);
    setTimeout(() => {
      setLog(log.filter((task) => task !== taskToDelete));
      setDeletingTask(null);
    }, 300);
  };

  function msToLogString(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (minutes < 6 && hours === 0) {
      return `${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(
        2,
        "0"
      )}s`;
    }

    return `${hours}h ${String(remainingMinutes).padStart(2, "0")}m`;
  }

  function msToDecimalStringForJira(ms) {
    const totalMinutes = ms / (1000 * 60);
    if (totalMinutes < 6) {
      return `${totalMinutes.toFixed(2)}m`;
    }

    const hours = totalMinutes / 60;
    return `${hours.toFixed(2)}h`;
  }

  useEffect(() => {
    const storedLog = JSON.parse(localStorage.getItem("taskLog")) || [];
    setLog(storedLog);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskLog", JSON.stringify(log));
  }, [log]);

  const startTimer = () => {
    if (!taskName) return;
    const now = Date.now();
    setStartTime(now);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - now);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    const durationMs = Date.now() - startTime;
    const date = new Date().toLocaleDateString();

    const newEntry = {
      id: Date.now(),
      name: taskName || "No name",
      duration: msToLogString(durationMs),
      jiraDuration: msToDecimalStringForJira(durationMs),
      date,
    };

    setLog([newEntry, ...log]);
    setIsRunning(false);
    setTaskName("");
    setElapsedTime(0);
  };

  const toggleFormat = () => setShowJiraFormat((f) => !f);

  return (
    <div className="app">
      <h1 className="title">Keep track of your time</h1>
      <TimerDisplay elapsedTime={elapsedTime} />
      <TimerInput
        taskName={taskName}
        setTaskName={setTaskName}
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <div className="format-toggle">
        <label className="check">
          <input
            type="checkbox"
            checked={showJiraFormat}
            onChange={toggleFormat}
          />{" "}
          Show Jira Hours
        </label>
      </div>
      <TaskLog
        log={log}
        onDelete={handleDelete}
        deletingTask={deletingTask}
        showJiraFormat={showJiraFormat}
      />
    </div>
  );
}

export default App;
