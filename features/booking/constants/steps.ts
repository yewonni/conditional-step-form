export const STEPS = [
  {
    id: "terms",
    label: "약관 동의",
  },
  {
    id: "owner-pet-info",
    label: "보호자 및 반려동물 정보",
  },
  {
    id: "has-additional-pets",
    label: "추가 반려동물 여부",
  },
  {
    id: "additional-pets-info",
    label: "추가 반려동물 정보",
  },
  {
    id: "needs-pickup",
    label: "픽업 필요 여부",
  },
  {
    id: "pickup-address",
    label: "픽업 주소",
  },
  {
    id: "payment",
    label: "결제",
  },
  {
    id: "special-requests",
    label: "요청사항",
  },
  {
    id: "complete",
    label: "완료",
  },
] as const;

export type StepId = (typeof STEPS)[number]["id"];
