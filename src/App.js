import React from 'react';
import Header from './components/Header';
import './App.css'; // We'll use this for global styles

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="welcome-card">
          <h2>Welcome to the Art of Flow</h2>
          <p>
            This is the starting point for your application. From here, you can build out the features for tracking habits, analyzing your performance, and mastering the principles of flow.
          </p>
        </div>
      </main>
      <footer className="footer">
        <h3>Flow is a Trainable Skill</h3>
        <p>
          Peak performance is not an accident. It's the result of intentionally designing your life, mind, and environment.
        </p>
      </footer>
    </div>
  );
}

export default App;