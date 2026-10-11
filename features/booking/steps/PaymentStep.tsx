import { PAYMENT_METHODS, type PaymentMethod } from "../types";

type PaymentStepProps = {
  value: PaymentMethod | null;
  onChange: (method: PaymentMethod) => void;
};

const PAYMENT_METHOD_OPTIONS = Object.entries(PAYMENT_METHODS) as [
  PaymentMethod,
  string,
][];

export default function PaymentStep({ value, onChange }: PaymentStepProps) {
  return (
    <div>
      <p>결제 수단을 선택해주세요.</p>
      {PAYMENT_METHOD_OPTIONS.map(([method, label]) => (
        <label key={method}>
          <input
            type="radio"
            name="payment-method"
            checked={value === method}
            onChange={() => onChange(method)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
