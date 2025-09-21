import React from 'react';

const MarkdownRenderer = ({ content }) => {
  const renderLine = (line) => {
    // Escape HTML to prevent XSS, though we are only replacing specific patterns
    let processedLine = line
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Process **bold** text
    processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Process [links](url)
    processedLine = processedLine.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:underline">$1</a>'
    );

    return processedLine;
  };

  const lines = content.split('\n');
  const elements = [];
  let currentListItems = [];

  const flushList = () => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-1 my-2">
          {currentListItems}
        </ul>
      );
      currentListItems = [];
    }
  };

  lines.forEach((line, index) => {
    if (line.trim().startsWith('* ')) {
      currentListItems.push(
        <li key={index} dangerouslySetInnerHTML={{ __html: renderLine(line.trim().substring(2)) }} />
      );
    } else {
      flushList();
      if (line.trim()) {
        elements.push(<p key={index} dangerouslySetInnerHTML={{ __html: renderLine(line) }} />);
      }
    }
  });

  flushList(); // Flush any remaining list items at the end of the content

  return <div className="prose prose-invert max-w-none prose-p:my-1 text-inherit">{elements}</div>;
};

export default MarkdownRenderer;