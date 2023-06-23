import React, { useState } from "react";
import "./App.scss";
import SortableList from "./SortableList";
import markerIcons from "./Markers/markerIcons";

const initialBlocks = [
  { bgColor: "#00a8ff", text: "lorem" },
  { bgColor: "#9c88ff", text: "ipsum" },
  { bgColor: "#fbc531", text: "dolor" },
  { bgColor: "#4cd137", text: "sit" },
  { bgColor: "#487eb0", text: "amet" },
];

function App() {
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleSwap = (oldIndex, newIndex) => {
    [blocks[oldIndex], blocks[newIndex]] = [blocks[newIndex], blocks[oldIndex]];
    setBlocks([...blocks]);
  };

  return (
    <div className="container">
      <div className="horizontal-menu sortable">
        <div className="wrapper">
          <div className="line"></div>
          <div className="driver-start-location">
            <img
              src={markerIcons["start"]["7F8C8D"]}
              alt="truck"
            />
          </div>
          <div className="content drags">
            <SortableList
              draggableSelector=".dragItem"
              indexAttribute="data-index"
              onSort={handleSwap}
            >
              {({ initSortable }) => (
                <div ref={initSortable}>
                  {blocks.map(({ bgColor, text }, i) => (
                    <div
                      className="dragItem"
                      data-index={i}
                      style={{
                        borderColor: bgColor,
                        color: bgColor,
                      }}
                      key={text}
                    >
                      <div className="text">
                        {i + 1}
                      </div>
                      
                    </div>
                  ))}
                </div>
              )}
            </SortableList>
          </div>
          <div className="driver-end-location">
            <img
              src={markerIcons["end"]["7F8C8D"]}
              alt="truck"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
