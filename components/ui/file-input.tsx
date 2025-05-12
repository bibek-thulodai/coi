import React from "react"

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  accept?: string
}

export const FileInput: React.FC<FileInputProps> = ({ accept, ...props }) => {
  return (
    <input
      type="file"
      accept={accept}
      {...props}
      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
    />
  )
}
