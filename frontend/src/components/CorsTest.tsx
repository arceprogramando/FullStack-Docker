import { useState, useEffect } from 'react';

const CorsTest = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const backendUrl = 'http://localhost:8080';

    fetch(`${backendUrl}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>CORS Test Component</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <p>Response from backend: {data}</p>
    </div>
  );
};

export default CorsTest;
