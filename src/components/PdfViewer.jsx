import React from 'react';

const PdfViewer = ({ url }) => (
  <iframe
    src={url}
    width="100%"
    height="600px"
    style={{ border: 'none' }}
    title="PDF Viewer"
  />
);

export default PdfViewer;
