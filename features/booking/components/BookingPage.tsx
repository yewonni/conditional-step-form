"use client";

import TermsStep from "../steps/TermsStep";
import OwnerPetStep from "../steps/OwnerPetStep";
import YesNoQuestion from "../steps/YesNoQuestion";
import PickupAddressStep from "../steps/PickupAddressStep";
import SpecialRequestsStep from "../steps/SpecialRequestsStep";
import useBookingFlow from "../hooks/useBookingFlow";

export default function BookingPage() {
  const {
    data,
    updateOwner,
    updatePet,
    updateData,
    currentStep,
    currentStepInfo,
    canGoPrev,
    canGoNext,
    goNext,
    goPrev,
    pay,
  } = useBookingFlow();

  return (
    <>
      <h2>{currentStepInfo.label}</h2>
      {currentStep === "terms" && (
        <TermsStep
          agreed={data.agreedToTerms}
          onChange={(agreed) => updateData({ agreedToTerms: agreed })}
        />
      )}
      {currentStep === "owner-pet-info" && (
        <OwnerPetStep
          owner={data.owner}
          pet={data.pet}
          checkInDate={data.checkInDate}
          checkOutDate={data.checkOutDate}
          onOwnerChange={updateOwner}
          onPetChange={updatePet}
          onDatesChange={updateData}
        />
      )}
      {currentStep === "has-additional-pets" && (
        <YesNoQuestion
          question="추가로 맡길 반려동물이 있나요?"
          yesLabel="있음"
          noLabel="없음"
          value={data.hasAdditionalPets}
          onChange={(value) => updateData({ hasAdditionalPets: value })}
        />
      )}
      {currentStep === "needs-pickup" && (
        <YesNoQuestion
          question="픽업 서비스가 필요하신가요?"
          yesLabel="필요"
          noLabel="불필요"
          value={data.needsPickup}
          onChange={(value) => updateData({ needsPickup: value })}
        />
      )}
      {currentStep === "pickup-address" && (
        <PickupAddressStep
          address={data.pickupAddress}
          time={data.pickupTime}
          onAddressChange={(address) => updateData({ pickupAddress: address })}
          onTimeChange={(time) => updateData({ pickupTime: time })}
        />
      )}
      {currentStep === "special-requests" && (
        <SpecialRequestsStep
          value={data.specialRequests}
          onChange={(value) => updateData({ specialRequests: value })}
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
