import { useState } from "react";

function BgChanger() {
  const colors = [
    { name: "Red", color: "red" },
    { name: "Blue", color: "blue" },
    { name: "Green", color: "green" },
    { name: "Yellow", color: "yellow" },
    { name: "Indigo", color: "indigo" },
    { name: "Purple", color: "purple" },
    { name: "Pink", color: "pink" },
    { name: "Gray", color: "gray" },
    { name: "Orange", color: "orange" },
    { name: "Teal", color: "teal" }
  ];

  const [backgroundColor, setBackgroundColor] = useState("gray");

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow" style={{ backgroundColor: backgroundColor }}>
        {/* Your content goes here */}
      </div>
      <div className="fixed bottom-0 inset-x-0 bg-white p-3">
        <div className="flex justify-center gap-3">
          {colors.map((c, index) => (
            <button
              key={index}
              className={`p-2 bg-${c.color}-500 text-white rounded-md hover:bg-${c.color}-600 focus:outline-none`}
              onClick={() => setBackgroundColor(c.color)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
