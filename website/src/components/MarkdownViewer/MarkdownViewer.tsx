// src/components/MarkdownViewer/MarkdownViewer.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import articles from '../../data/articlesData'; // Adjust the import path
import styles from './MarkdownViewer.module.css';

type Article = {
  id: number;
  title: string;
  markdownFile: string;
};

const MarkdownViewer: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const article = articles.find((a: Article) => a.id.toString() === id);
    const markdownFile = article ? `${process.env.PUBLIC_URL}/articles/${article.markdownFile}` : '';

    if (markdownFile) {
      fetch(markdownFile)
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching markdown:', error));
    }
  }, [id]);


  return (
    <div className={styles.markdownContainer}>
      <div className={styles.markdownContent} dangerouslySetInnerHTML={{ __html: marked(markdown) as string }} />
    </div>
  );
};

export default MarkdownViewer;
