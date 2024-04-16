import react from 'react';
import 'reactflow/dist/style.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactSearchBox from 'react-search-box';
import Flow from './Flow.jsx';

const data = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
    key: 'Hello',
    value: 'Hello',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
    key: 'World',
    value: 'World',
  },
  {
    id: '3',
    data: { label: 'Bye' },
    position: { x: 0, y: 0 },
    type: 'input',
    key: 'Bye',
    value: 'Bye',
  },
  {
    id: '4',
    data: { label: 'Universe' },
    position: { x: 100, y: 100 },
    key: 'Universe',
    value: 'Universe',
  },
];

function App() {
  const [initial, setInitial] = useState([
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
      type: 'input',
      key: 'Hello',
      value: 'Hello',
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 100, y: 100 },
      key: 'World',
      value: 'World',
    },
  ]);

  return (
    <div className="outerMost">
      <div className="innerContainer">
        <div className="searchBar">
          <ReactSearchBox
            placeholder="Add new node..."
            className="searchBarMain"
            value="Doe"
            data={data}
            callBack={(record) => console.log(record)}
            onSelect={({ item }) => {
              if (item.id == '1' || item.id == '2') {
                setInitial(data.slice(0, 2));
              } else {
                setInitial(data.slice(2, 4));
              }
            }}
          />
        </div>
      </div>
      <Flow data={data} initial={initial} />
    </div>
  );
}

export default App;
