type PickupAddressStepProps = {
  address: string;
  time: string;
  onAddressChange: (address: string) => void;
  onTimeChange: (time: string) => void;
};

export default function PickupAddressStep({
  address,
  time,
  onAddressChange,
  onTimeChange,
}: PickupAddressStepProps) {
  return (
    <div>
      <label htmlFor="pickup-address">픽업 주소</label>
      <input
        id="pickup-address"
        type="text"
        value={address}
        placeholder="상세 주소까지 입력해주세요."
        onChange={(e) => onAddressChange(e.target.value)}
      />

      <label htmlFor="pickup-time">희망 픽업 시간</label>
      <input
        id="pickup-time"
        type="time"
        value={time}
        onChange={(e) => onTimeChange(e.target.value)}
      />
    </div>
  );
}
