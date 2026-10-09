"use client";

import { useState } from "react";
import { STEPS, type StepId } from "../constants/steps";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<StepId>(STEPS[0].id);

  const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === STEPS.length - 1;
  const currentStepInfo = STEPS[currentIndex];

  const handleNext = () => {
    if (isLastStep) {
      return;
    }
    setCurrentStep(STEPS[currentIndex + 1].id);
  };

  const handlePrev = () => {
    if (isFirstStep) {
      return;
    }
    setCurrentStep(STEPS[currentIndex - 1].id);
  };

  return (
    <>
      <h2>{currentStepInfo.label}</h2>
      <div>
        <button onClick={handlePrev} disabled={isFirstStep}>
          이전
        </button>
        <button onClick={handleNext} disabled={isLastStep}>
          다음
        </button>
      </div>
    </>
  );
}
