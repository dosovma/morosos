import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
          'https://xx9h52sa90.execute-api.eu-north-1.amazonaws.com/test/api/v1',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: '{"operation": "create", "payload": {"Item": {"id": "123456", "nombre": "dosov"}}}'
          }
      );

      if (!response.ok) {
        // If the server response is not 2xx, throw an error
        throw new Error('Network response was not ok');
      }

      // Optionally parse JSON if the endpoint returns JSON
      const data = await response.json();
      console.log('Success:', data);

      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data');
    }
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.title}>Detalles del inquilino</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label htmlFor="name">Nombre</label>
            <input
                id="name"
                style={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="surname">Apellido</label>
            <input
                id="surname"
                style={styles.input}
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="apellido"
            />
          </div>
          <button style={styles.button} type="submit">
            Entregar
          </button>
        </form>
      </div>
  );
}

// Simple inline styles to resemble the attached design (optional)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'sans-serif'
  },
  title: {
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px'
  },
  field: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '8px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#4285f4',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer'
  }
};

export default App;