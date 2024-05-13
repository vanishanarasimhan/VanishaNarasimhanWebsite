import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>About Us</h2>
        <p>We are a company dedicated to providing excellent services to our customers.</p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
