import React from "react";

interface TextareaProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({ label, placeholder, value, onChange }: TextareaProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);
