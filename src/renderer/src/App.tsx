function App(): JSX.Element {

  return (
    <div>
      <h2>Counter</h2>
      <div style={{
        display: 'flex',
        gap: '10px',
      }}>
        <button>+</button>
        <span style={{
          fontSize: '20px',
        }}>0</span>
        <button>-</button>
      </div>
    </div>
  )
}

export default App
