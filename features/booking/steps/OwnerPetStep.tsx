import type { Owner, Pet } from "../types";

type OwnerPetStepProps = {
  owner: Owner;
  pet: Pet;
  checkInDate: string;
  checkOutDate: string;
  onOwnerChange: (fields: Partial<Owner>) => void;
  onPetChange: (fields: Partial<Pet>) => void;
  onDatesChange: (fields: {
    checkInDate?: string;
    checkOutDate?: string;
  }) => void;
};

export default function OwnerPetStep({
  owner,
  pet,
  checkInDate,
  checkOutDate,
  onOwnerChange,
  onPetChange,
  onDatesChange,
}: OwnerPetStepProps) {
  return (
    <div>
      <h3>보호자 정보</h3>
      <label htmlFor="owner-name">이름</label>
      <input
        id="owner-name"
        type="text"
        value={owner.name}
        onChange={(e) => onOwnerChange({ name: e.target.value })}
      />
      <label htmlFor="owner-contact">연락처</label>
      <input
        id="owner-contact"
        type="tel"
        value={owner.contact}
        placeholder="010-0000-0000"
        onChange={(e) => onOwnerChange({ contact: e.target.value })}
      />

      <h3>반려동물 정보</h3>
      <label htmlFor="pet-name">이름</label>
      <input
        id="pet-name"
        type="text"
        value={pet.name}
        onChange={(e) => onPetChange({ name: e.target.value })}
      />
      <label htmlFor="pet-species">종류</label>
      <input
        id="pet-species"
        type="text"
        value={pet.species}
        placeholder="예: 말티즈, 비숑프리제"
        onChange={(e) => onPetChange({ species: e.target.value })}
      />
      <label htmlFor="pet-weight">몸무게 (kg)</label>
      <input
        id="pet-weight"
        type="number"
        value={pet.weight ?? ""}
        onChange={(e) =>
          onPetChange({
            weight: e.target.value === "" ? null : Number(e.target.value),
          })
        }
      />
      <label htmlFor="pet-special-note">특이사항 (선택)</label>
      <input
        id="pet-special-note"
        type="text"
        value={pet.specialNote}
        onChange={(e) => onPetChange({ specialNote: e.target.value })}
      />

      <h3>예약 기간</h3>
      <label htmlFor="check-in-date">체크인</label>
      <input
        id="check-in-date"
        type="date"
        value={checkInDate}
        onChange={(e) => onDatesChange({ checkInDate: e.target.value })}
      />
      <label htmlFor="check-out-date">체크아웃</label>
      <input
        id="check-out-date"
        type="date"
        value={checkOutDate}
        onChange={(e) => onDatesChange({ checkOutDate: e.target.value })}
      />
    </div>
  );
}
