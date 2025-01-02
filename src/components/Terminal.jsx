import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Terminal({ onClose }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to the interactive terminal! Type `help` for a list of commands.",
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(commandHistory[historyIndex - 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(commandHistory[historyIndex + 1]);
      } else {
        setHistoryIndex(commandHistory.length);
        setInput("");
      }
    }
  };

  const processCommand = (command) => {
    let response = "";
    switch (command.trim().toLowerCase()) {
      case "help":
        response = `
          Available commands:
          - help: Show this help message
          - about: Navigate to the About page
          - project: Navigate to the Project page
          - /: Navigate to the Home page
          - clear: Clear the terminal screen
        `;
        break;
      case "about":
        navigate("/aboutme");
        return;
      case "project":
        navigate("/project");
        return;
      case "/":
        navigate("/");
        return;
      case "cls":
        setOutput([]);
        return;
      case "clear":
        setOutput([]);
        return;
      default:
        response = `${command} is not a command. Type help for a list of commands.`;
    }
    setOutput((prevOutput) => [...prevOutput, `>> ${command}`, response]);

    setCommandHistory((prevHistory) => [...prevHistory, command]);
    setHistoryIndex(commandHistory.length);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-yellow-300 rounded-lg">
      <div className="relative w-full max-w-lg bg-gray-900 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
          <button
            onClick={() => onClose()}
            className="p-2 text-orange-600 hover:text-orange-500"
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-2 h-full overflow-y-auto">
          <div className="mb-2">
            {output.map((line, index) => (
              <div
                key={index}
                className={`line whitespace-pre-wrap font-mono ${
                  line.startsWith(">") ? "text-yellow-300" : ""
                } ${line.includes("Unknown command") ? "text-red-600" : ""}`}
              >
                {line}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
            className="w-full bg-gray-900 text-yellow-300 border-none focus:outline-none p-2 font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
