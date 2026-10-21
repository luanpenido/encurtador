'use client';

import React, { useState, useEffect } from 'react';

interface AffiliateButtonProps {
  initialUrl: string;
  className?: string;
  children: React.ReactNode;
}

export default function AffiliateButton({ initialUrl, className, children }: AffiliateButtonProps) {
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    fetch('/api/deals?limit=1')
      .then((r) => r.json())
      .then((data) => {
        if (data?.amazonTag) {
          setUrl((prev) => {
            if (prev.includes('tag=')) {
              return prev.replace(/tag=[^&]+/i, `tag=${data.amazonTag}`);
            }
            return prev.includes('?') ? `${prev}&tag=${data.amazonTag}` : `${prev}?tag=${data.amazonTag}`;
          });
        }
      })
      .catch(() => {});
  }, [initialUrl]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
    >
      {children}
    </a>
  );
}
