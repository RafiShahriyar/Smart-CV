"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill-new/dist/quill.snow.css";

// Prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Props {
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function RichTextarea({
  name = "content",
  placeholder = "Write something...",
  defaultValue = "",
  onChange,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (content: string) => {
    setValue(content);
    onChange?.(content);
  };

  return (
    <div className="flex flex-col gap-2 text-black">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-white rounded-md"
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
}
