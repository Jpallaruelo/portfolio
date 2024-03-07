import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import './stilostask.css';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const recognitionRef = useRef(null);
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.lang = 'es-ES';
      recognition.interimResults = false;

      recognition.onstart = () => {
        console.log("El reconocimiento de voz está activo");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript.trim();
        setNewTask(transcript);
        // Detener automáticamente el reconocimiento de voz al recibir una transcripción
        recognition.stop();
      };

      recognition.onend = () => {
        console.log("El reconocimiento de voz se ha detenido");
        recognitionRef.current.isStarted = false; // Asegurarse de que el estado refleje que el reconocimiento se ha detenido
      };

      recognition.onerror = (event) => {
        console.error("Error en el reconocimiento de voz:", event.error);
      };

      recognitionRef.current = recognition;
    } else {
      console.log("La API de reconocimiento de voz no es soportada en este navegador.");
    }
  }, []);

  const toggleVoiceRecognition = () => {
    if (recognitionRef.current) {
      if (recognitionRef.current.isStarted) {
        recognitionRef.current.stop();
        recognitionRef.current.isStarted = false;
      } else {
        recognitionRef.current.start();
        recognitionRef.current.isStarted = true;
      }
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddOrUpdateTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks];
    if (editingIndex !== null) {
      updatedTasks[editingIndex] = newTask;
      setEditingIndex(null);
    } else {
      updatedTasks.push(newTask.trim());
    }

    setTasks(updatedTasks);
    setNewTask("");
    setEditingIndex(null);
  };

  const startEditing = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleClearTasks = () => {
    setNewTask("");
    setTasks([]);
  };

  return (
    <div>
      <h3>Task App</h3>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddOrUpdateTask();
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={editingIndex !== null ? "Update the task..." : "Add a new task..."}
          className={editingIndex !== null ? "editing" : "adding"}
          style={{
            padding: "0px",
            margin: "10px 0",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
            color: editingIndex !== null ? "#FFA500" : "#006400",
            fontSize: "30px",
          }}
        />
        <button
          className={`button ${editingIndex !== null ? "update-button" : "add-button"}`}
          onClick={handleAddOrUpdateTask}
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
        <button className="clear-button button" onClick={handleClearTasks}>
          Clear
        </button>
      </div>
      <button className="button" onClick={toggleVoiceRecognition}>
        {recognitionRef.current && recognitionRef.current.isStarted ? "Stop Voice Recognition" : "Start Voice Recognition"}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <FontAwesomeIcon
              icon={faTrash}
              style={{ marginLeft: "10px", cursor: "pointer", padding: "2px", color: "red" }}
              onClick={() => handleDeleteTask(index)}
            />
            <FontAwesomeIcon
              icon={faEdit}
              style={{ marginLeft: "10px", cursor: "pointer", padding: "2px" }}
              color="yellow"
              onClick={() => startEditing(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;
