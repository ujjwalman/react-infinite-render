import useUser from './useUser';

function App() {
  // simulating current logged in user which is 1
  const user = useUser({ id: 1 })
  return (
    <>
      <h1>User details</h1>
        <pre>
          {JSON.stringify(user, null, '\t')}
        </pre>
    </>
  );
}

export default App;
