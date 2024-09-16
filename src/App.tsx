import { ReactFlow, Background, Controls } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import "./App.css";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
