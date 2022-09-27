import React from 'react';

export default function Description({ Details }) {
  return (
    <>
      <div className="blog-info details mb-30">
        <h5 className="mb-4">Description</h5>
        <p className="mb-3">
          {Details?.description}
        </p>

      </div>
    </>
  );
}
