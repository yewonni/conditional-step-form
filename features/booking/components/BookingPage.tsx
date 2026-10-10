"use client";

import { useState } from "react";
import { STEPS, type StepId } from "../constants/steps";
import YesNoQuestion from "../steps/YesNoQuestion";

const PAYMENT_INDEX = STEPS.findIndex((step) => step.id === "payment");

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<StepId>(STEPS[0].id);
  const [hasAdditionalPets, setHasAdditionalPets] = useState<boolean | null>(
    null,
  );
  const [needsPickup, setNeedsPickup] = useState<boolean | null>(null);
  const [isPaid, setIsPaid] = useState(false);

  const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === STEPS.length - 1;
  const currentStepInfo = STEPS[currentIndex];
  const canGoBack =
    !isFirstStep &&
    !isLastStep &&
    (!isPaid || currentIndex - 1 > PAYMENT_INDEX);
  const canGoNext = !isLastStep && (currentStep !== "payment" || isPaid);

  const shouldSkip = (stepId: StepId) => {
    if (stepId === "additional-pets-info" && hasAdditionalPets !== true) {
      return true;
    }

    if (stepId === "pickup-address" && needsPickup !== true) {
      return true;
    }

    return false;
  };

  const getNextIndex = () => {
    let nextIndex = currentIndex + 1;

    if (shouldSkip(STEPS[nextIndex].id)) {
      nextIndex += 1;
    }

    if (shouldSkip(STEPS[nextIndex].id)) {
      nextIndex += 1;
    }

    return nextIndex;
  };

  const getPrevIndex = () => {
    let prevIndex = currentIndex - 1;

    if (shouldSkip(STEPS[prevIndex].id)) {
      prevIndex -= 1;
    }

    if (shouldSkip(STEPS[prevIndex].id)) {
      prevIndex -= 1;
    }

    return prevIndex;
  };

  const handleNext = () => {
    if (!canGoNext) {
      return;
    }

    setCurrentStep(STEPS[getNextIndex()].id);
  };

  const handlePrev = () => {
    if (!canGoBack) {
      return;
    }

    setCurrentStep(STEPS[getPrevIndex()].id);
  };

  const handlePay = () => {
    setIsPaid(true);
    setCurrentStep(STEPS[getNextIndex()].id);
  };

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
      {currentStep === "payment" && (
        <button onClick={handlePay}>결제하기</button>
      )}
      <div>
        {canGoBack && <button onClick={handlePrev}>이전</button>}
        {canGoNext && <button onClick={handleNext}>다음</button>}
      </div>
    </>
  );
}
