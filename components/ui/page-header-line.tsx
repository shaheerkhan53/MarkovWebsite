
'use client';

import React from 'react';
import Link from 'next/link';

interface PageHeaderLineProps {
  title: string;
  color: string;
  icon?: React.ReactNode;
  link?: {
    text: string;
    url: string;
  };
}

export function PageHeaderLine({ title, color, icon, link }: PageHeaderLineProps) {
  return (
    <div className={`${color} text-white py-3 px-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
        {link && (
          <Link 
            href={link.url} 
            target="_blank"
            className="text-sm hover:underline flex items-center"
          >
            {link.text}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}