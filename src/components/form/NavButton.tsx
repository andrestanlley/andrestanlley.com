interface ButtonProps {
  text: string;
  submit?: () => void;
}

export default function NavButton({ text, submit }: ButtonProps) {
  return (
    <button
      className="font-sans p-1 mr-3 rounded-3xl text-sm "
      onClick={submit}
    >
      {text}
    </button>
  );
}
