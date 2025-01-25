import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import axios from 'axios';
import SideBar from '../SideBar';

const HomePage = () => {
  
  const [imageFile, setImageFile] = useState(null);
  const [modelFile, setModelFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [beds, setBeds] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [uploading, setUploading] = useState(false);


 const handleFileUpload = async () => {
  if (!imageFile || !modelFile || !title || !description || !beds || !dimensions || !location || !price) {
    alert("Please fill in all fields and upload files.");
    return;
  }

  setUploading(true);
  try {
    // Create FormData object
    const formData = new FormData();
    formData.append("imageFile", imageFile); // Name must match the field name in the Multer configuration
    formData.append("modelFile", modelFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("beds", beds);
    formData.append("dimensions", dimensions);
    formData.append("location", location);
    formData.append("price", price);

    // Send request with FormData
    await axios.post("https://10e4-102-89-84-55.ngrok-free.app/upload-model", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Data saved successfully!");
    resetForm();
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Failed to save data.");
  } finally {
    setUploading(false);
  }
};

  const resetForm = () => {
    setImageFile(null);
    setModelFile(null);
    setTitle("");
    setDescription("");
    setBeds("");
    setDimensions("");
    setLocation("");
    setPrice("");
    handleClearFile("");
  };

  const handleClearFile = (fileType) => {
    if (fileType === "image") setImageFile(null);
    if (fileType === "model") setModelFile(null);
  };

  return (
    <section className='h-full flex w-full'>
      <div className='flex min-h-screen w-full'>
        <SideBar />
        <div className="bg-white w-full rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Upload New Model</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className='grid grid-cols-3 gap-x-4'>
              <div>
                <label htmlFor="beds" className="block text-sm font-medium text-gray-700">Bed</label>
                <input
                  type="text"
                  id="beds"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="dimensions" className=" mr-4 block text-sm font-medium text-gray-700">Dimensions</label>
                <input
                  type="text"
                  id="dimensions"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-x-4'>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
            <input type="file" onChange={(e) => setModelFile(e.target.files[0])} />

            <div>
              
              <button
                onClick={handleFileUpload}
                disabled={uploading}
                className="mt-3 w-full px-4 py-4 bg-black font-bold text-white rounded-md hover:bg-white hover:text-black hover:border-[3px] hover:border-black transition duration-500 disabled:bg-blue-300"
              >
                {uploading ? 'Uploading...' : 'Upload Model'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
