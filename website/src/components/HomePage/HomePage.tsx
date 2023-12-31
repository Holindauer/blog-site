// src/components/HomePage/HomePage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articles from '../../data/articlesData'; // Adjust the import path
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Holindauer"; // Set the page title
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Holindauer's Blog</h1>
      <div className={styles.articlesList}>
        {articles.map(article => (
          <Link to={`/article/${article.id}`} key={article.id} className={styles.articleLink}>
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
