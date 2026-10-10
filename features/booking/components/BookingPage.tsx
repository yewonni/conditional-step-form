"use client";

import YesNoQuestion from "../steps/YesNoQuestion";
import useBookingFlow from "../hooks/useBookingFlow";

export default function BookingPage() {
  const {
    currentStep,
    currentStepInfo,
    hasAdditionalPets,
    setHasAdditionalPets,
    needsPickup,
    setNeedsPickup,
    canGoPrev,
    canGoNext,
    goNext,
    goPrev,
    pay,
  } = useBookingFlow();

  return (
    <>
      <h2>{currentStepInfo.label}</h2>
      {currentStep === "has-additional-pets" && (
        <YesNoQuestion
          question="추가로 맡길 반려동물이 있나요?"
          yesLabel="있음"
          noLabel="없음"
          value={hasAdditionalPets}
          onChange={setHasAdditionalPets}
        />
      )}
      {currentStep === "needs-pickup" && (
        <YesNoQuestion
          question="픽업 서비스가 필요하신가요?"
          yesLabel="필요"
          noLabel="불필요"
          value={needsPickup}
          onChange={setNeedsPickup}
        />
      )}
      {currentStep === "payment" && <button onClick={pay}>결제하기</button>}
      <div>
        {canGoPrev && <button onClick={goPrev}>이전</button>}
        {canGoNext && <button onClick={goNext}>다음</button>}
      </div>
    </>
  );
}
