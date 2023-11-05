// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ 
        backgroundColor: '#121212', // Dark background color
        color: '#c0c0c0', // Cool white text color
        textAlign: 'center', // Center text alignment
        paddingTop: '50px', // Padding from the top of the viewport
        minHeight: '100vh' // Minimum height to fill the screen vertically
      }}>
        <h1>Holindauer</h1>
        
        {/* Paragraph with controlled text width */}
        <p style={{
          maxWidth: '600px', // Maximum width of the text block
          margin: '20px auto', // Centering the text block horizontally
          lineHeight: '1.6', // Adjust line height for readability
        }}>
          Hello! My name is Hunter. I am an undergrad computer science student. I am interested in machine learning, linear algebra,
          philosophy, etc. A good friend of mine suggested that I create a blog to document the state of my thought process as I go
          about my learning. This is that blog.
        </p>
        
        {/* Flex container for date and button */}
        <div style={{
          display: 'flex', // Use flexbox to layout children horizontally
          justifyContent: 'flex-start', // Align children to the start (left)
          alignItems: 'center', // Align children vertically in the center
          maxWidth: '600px', // Set a maximum width for the container
          margin: '20px auto', // Center the container with auto margins on the sides
          padding: '0 10px', // Padding inside the container
        }}>
          {/* Date text */}
          <p style={{
            marginRight: '10px', // Add space between the text and the button
            marginBottom: '0', // Remove bottom margin from paragraph
          }}>
            ------------------------------11/4/2023 6:04 PM----------------------------
          </p>
      
          {/* Link and button */}
          <Link to="/blog-post-1" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#282c34',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}>
              Read
            </button>
          </Link>
        </div>
      
        {/* Additional content can be added here if needed */}
      </div>
  );
};

export default HomePage;
