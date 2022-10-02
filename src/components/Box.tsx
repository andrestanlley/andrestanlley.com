import { ReactNode } from "react";

interface BoxProps {
  text: string;
  icon: ReactNode;
}

export default function Box({ text, icon }: BoxProps) {
  return (
    <div className="w-48 sm:w-[100%] lg:m-6 text-sm text-gray-600 rounded-2xl text-center shadow-md p-4 m-2">
      <div className="flex justify-center my-1">{icon}</div>
      {text}
    </div>
  );
}
