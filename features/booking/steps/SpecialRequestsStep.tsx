type SpecialRequestsStepProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SpecialRequestsStep({
  value,
  onChange,
}: SpecialRequestsStepProps) {
  return (
    <div>
      <label htmlFor="special-requests">
        요청사항이 있다면 적어주세요. (선택)
      </label>
      <textarea
        id="special-requests"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="산책은 하루 두 번 부탁드려요."
      />
    </div>
  );
}
