import React from "react";
import { VictoryPie } from "victory";

export default function TodoStatus() {
  // Sample data
  const myDatas = [
    { name: "Todo", fill: "rgb(22 163 74)", students: 3 },
    { name: "Done", fill: "rgb(147 51 234)", students: 2 },
    { name: "Incomplete", fill: "rgb(220 38 38)", students: 1 },
  ];

  const myData = [
    { x: "Incomplete", y: 1, label: "Incomplete" },
    { x: "Done", y: 2, label: "Done" },
    { x: "Todo", y: 3, label: "Todo" },
  ];

  return (
    <div id="todo-status" className="my-4" style={{ height: 200 }}>
      <VictoryPie
        data={myData}
        colorScale={["rgb(220 38 38)", "rgb(147 51 234)", "rgb(22 163 74)"]}
        style={{
          data: { stroke: "black", strokeWidth: 2 },
          labels: { fontSize: 30, fontWeight: "bold", padding: 30 },
        }}
      />
    </div>
  );
}
