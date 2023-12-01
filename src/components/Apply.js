import React from 'react';
import { useDropzone } from 'react-dropzone';
import './CSS/Apply.css';

const Apply = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'application/pdf',
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop your resume here, or click to select files</p>
      )}
    </div>
  );
};

export default Apply;