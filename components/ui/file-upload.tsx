import React from "react";

interface FileUploadProps {
  label: string;
  accept?: string;
  onFileChange?: (file: File | null) => void;
}

export const FileUpload = ({ label, accept, onFileChange }: FileUploadProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileChange) {
      onFileChange(e.target.files?.[0] || null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="file"
        accept={accept}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};
