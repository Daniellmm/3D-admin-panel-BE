import React from 'react'

const Testing = () => {
  return (
    // import React, { useState } from 'react';
// import SideBar from '../SideBar';
// // import { CheckCircle2 } from 'lucide-react';

// const HomePage = () => {
//   const [{ file, uploading, error, uploadedFile }, setFileState] = useState({
//     file: null,
//     uploading: false,
//     error: null,
//     uploadedFile: null
//   });
//   const [dragActive, setDragActive] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) validateFile(selectedFile);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragActive(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragActive(false);
//     const droppedFile = e.dataTransfer.files[0];
//     validateFile(droppedFile);
//   };

//   const validateFile = (selectedFile) => {
//     if (selectedFile && selectedFile.type === 'model/gltf-binary') {
//       setFileState(prev => ({ ...prev, file: selectedFile, error: null }));
//     } else {
//       setFileState(prev => ({
//         ...prev,
//         file: null,
//         error: 'Please select a valid .glb file'
//       }));
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setFileState(prev => ({
//         ...prev,
//         error: 'Please select a .glb file before uploading.'
//       }));
//       return;
//     }

//     try {
//       setFileState(prev => ({ ...prev, uploading: true, error: null }));

//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await fetch('/api/upload', {  // Replace with your actual API endpoint
//         method: 'POST',
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error('Upload failed');
//       }

//       const data = await response.json();
//       console.log('Upload successful:', data);

//       // Store uploaded file info and reset form
//       setFileState({
//         file: null,
//         uploading: false,
//         error: null,
//         uploadedFile: {
//           name: file.name,
//           size: file.size,
//           timestamp: new Date().toLocaleString()
//         }
//       });

//     } catch (err) {
//       setFileState(prev => ({
//         ...prev,
//         uploading: false,
//         error: err.message || 'Upload failed'
//       }));
//     }
//   };

//   const handleNewUpload = () => {
//     setFileState({
//       file: null,
//       uploading: false,
//       error: null,
//       uploadedFile: null
//     });
//   };

//   if (uploadedFile) {
//     return (
//       <section className='h-full flex w-full'>
//         <div className='flex min-h-screen w-full'>
//           <SideBar />
//           <div className='flex-1 p-8 flex justify-center items-center'>
//             <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
//               <div className='flex items-center justify-center mb-6 text-green-500'>
//                 <CheckCircle2 size={48} />
//               </div>
//               <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
//                 Upload Successful!
//               </h2>
//               <div className='space-y-4 mb-8'>
//                 <div className='bg-gray-50 p-4 rounded-lg'>
//                   <p className='text-sm text-gray-600'>File Name</p>
//                   <p className='font-medium text-gray-800'>{uploadedFile.name}</p>
//                 </div>
//                 <div className='bg-gray-50 p-4 rounded-lg'>
//                   <p className='text-sm text-gray-600'>File Size</p>
//                   <p className='font-medium text-gray-800'>
//                     {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
//                   </p>
//                 </div>
//                 <div className='bg-gray-50 p-4 rounded-lg'>
//                   <p className='text-sm text-gray-600'>Upload Time</p>
//                   <p className='font-medium text-gray-800'>{uploadedFile.timestamp}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleNewUpload}
//                 className='w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
//               >
//                 Upload Another File
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className='h-full flex w-full'>
//       <div className='flex min-h-screen w-full'>
//         <SideBar />
//         <div className='flex-1 p-8 flex justify-center items-center'>
//           <div
//             className={`w-full h-full border-dashed border-4 ${
//               dragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
//             } flex flex-col justify-center items-center relative`}
//             onDragOver={handleDragOver}
//             onDragLeave={handleDragLeave}
//             onDrop={handleDrop}
//           >
//             <input
//               type='file'
//               accept='.glb'
//               onChange={handleFileChange}
//               className='w-full h-full opacity-0 absolute z-10 cursor-pointer'
//               disabled={uploading}
//             />
//             <p className='text-lg text-gray-600'>
//               {dragActive 
//                 ? 'Drop the file here' 
//                 : uploading 
//                   ? 'Uploading...' 
//                   : 'Click or drag a .glb file to upload'
//               }
//             </p>
//             {file && (
//               <p className='mt-4 text-gray-700'>
//                 Selected file: <strong>{file.name}</strong>
//               </p>
//             )}
//             {error && (
//               <p className='mt-2 text-red-500'>{error}</p>
//             )}
//             <button
//               onClick={handleUpload}
//               disabled={!file || uploading}
//               className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded 
//                 ${!file || uploading 
//                   ? 'opacity-50 cursor-not-allowed' 
//                   : 'hover:bg-blue-600'
//                 }`}
//             >
//               {uploading ? 'Uploading...' : 'Upload File'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePage;
<div></div>
  )
}

export default Testing

