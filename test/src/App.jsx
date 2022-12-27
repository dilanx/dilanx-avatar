import Avatar from '../../components/Avatar';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Avatar size={128} color="#0000ff" text="D" />
    </div>
  );
}

export default App;
