type YesNoProps = {
  question: string;
  yesLabel: string;
  noLabel: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
};

export default function YesNoQuestion({
  question,
  yesLabel,
  noLabel,
  value,
  onChange,
}: YesNoProps) {
  return (
    <div>
      <p>{question}</p>
      <div className="flex gap-3">
        <button
          type="button"
          className={`rounded border px-4 py-2 ${
            value === true ? "bg-gray-800 text-white" : "bg-white"
          }`}
          onClick={() => onChange(true)}
        >
          {yesLabel}
        </button>
        <button
          type="button"
          className={`rounded border px-4 py-2 ${
            value === false ? "bg-gray-800 text-white" : "bg-white"
          }`}
          onClick={() => onChange(false)}
        >
          {noLabel}
        </button>
      </div>
    </div>
  );
}
