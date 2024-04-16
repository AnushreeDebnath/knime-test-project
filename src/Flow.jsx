import { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';

function Flow({ initial }) {
  console.log(initial);

  const initialEdges = [
    { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
  ];

  const [nodes, setNodes] = useState(initial);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        {/* <Controls /> */}
      </ReactFlow>
    </div>
  );
}

export default Flow;
