import React,{useState} from 'react';
import './style.css';

function InputRow({ label }) {
  const [count, setCount] = useState(0);
  console.log(`Rendered: ${label}`);

  return (
    <div>
      <span>{label}</span>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count}</button>
    </div>
  );
}

export default function App() {
  const [rows, setRows] = useState(['A', 'B']);

  return (
    <>
      <button onClick={() => setRows((r) => ['X', ...r])}>Add X on top</button>

      {rows.map((label, i) => (
        <InputRow key={i} label={label} />
      ))}
    </>
  );
}
