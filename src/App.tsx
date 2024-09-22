import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./App.css";

export const App: React.FC = () => {
  const initialNodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: (
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: "<input></input>" }}
          />
        ),
      },
      position: { x: 152, y: 25 },
      style: { border: "1px solid #777", padding: 10, backgroundColor: "red" },
    },

    {
      id: "2",
      // you can also pass a React component as a label
      data: { label: "Default Node" },
      position: { x: 100, y: 125 },
    },
    {
      id: "3",
      type: "output",
      data: { label: "Output Node" },
      position: { x: 250, y: 250 },
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", label: "to the" },
    { id: "e2-3", source: "2", target: "3", label: "", animated: true },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((nds) => applyEdgeChanges(changes, nds)),
    [setEdges]
  );

  const onConnectNodes = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnectNodes}
        fitView
      >
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
