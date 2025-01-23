import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaTerminal, 
  FaHome, 
  FaUser, 
  FaProjectDiagram 
} from "react-icons/fa";

function Terminal({ onClose }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to the interactive terminal! Type `help` for a list of commands."
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const commands = [
    { 
      name: "help", 
      description: "Show available commands",
      icon: <FaTerminal />
    },
    { 
      name: "home", 
      description: "Navigate to Home page",
      icon: <FaHome />
    },
    { 
      name: "about", 
      description: "Navigate to About page",
      icon: <FaUser />
    },
    { 
      name: "project", 
      description: "Navigate to Projects page",
      icon: <FaProjectDiagram />
    },
    { 
      name: "clear", 
      description: "Clear terminal screen",
      icon: <FaTimes />
    }
  ];

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
        response = commands.map(cmd => 
          `${cmd.name}: ${cmd.description}`
        ).join('\n');
        break;
      case "home":
        navigate("/");
        return;
      case "about":
        navigate("/aboutme");
        return;
      case "project":
        navigate("/project");
        return;
      case "clear":
        setOutput([]);
        return;
      default:
        response = `Unknown command: ${command}. Type 'help' for available commands.`;
    }

    setOutput((prevOutput) => [...prevOutput, `>> ${command}`, response]);
    setCommandHistory((prevHistory) => [...prevHistory, command]);
    setHistoryIndex(commandHistory.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl border border-blue-600/30">
        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-t-lg">
          <div className="flex items-center space-x-2 text-blue-500">
            <FaTerminal />
            <span className="text-sm font-medium">Interactive Terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <FaTimes />
          </button>
        </div>
        <div 
          ref={outputRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm bg-gray-900"
        >
          {output.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line.startsWith(">>") 
                  ? "text-blue-400" 
                  : line.includes("Unknown") 
                    ? "text-red-400" 
                    : "text-green-400"
              }`}
            >
              {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-blue-500 mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInput}
              className="bg-transparent text-white w-full focus:outline-none"
              autoFocus
              placeholder="Type 'help' for commands"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;