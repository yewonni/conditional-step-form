type TermsStepProps = {
  agreed: boolean;
  onChange: (agreed: boolean) => void;
};

export default function TermsStep({ agreed, onChange }: TermsStepProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => onChange(e.target.checked)}
        />
        예약 및 개인정보 수집에 동의합니다.
      </label>
    </div>
  );
}
