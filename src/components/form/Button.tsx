import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  color?: string;
  submit?: () => void;
  icon?: ReactNode;
}

export default function Button({
  text,
  color = "bg-slate-800",
  submit,
  icon,
}: ButtonProps) {
  return (
    <button
      className={`${color} flex items-center gap-1 py-3 px-5 w-[max-content] rounded text-md text-slate-50 hover:opacity-90`}
      onClick={submit}
    >
      {icon} {text}
    </button>
  );
}
