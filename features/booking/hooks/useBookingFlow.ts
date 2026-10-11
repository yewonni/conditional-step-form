import { useState } from "react";
import { STEPS, type StepId } from "../constants/steps";
import { type BookingData, Owner, Pet, INITIAL_BOOKING_DATA } from "../types";

const PAYMENT_INDEX = STEPS.findIndex((step) => step.id === "payment");

export default function useBookingFlow() {
  const [currentStep, setCurrentStep] = useState<StepId>(STEPS[0].id);
  const [data, setData] = useState<BookingData>(INITIAL_BOOKING_DATA);
  const [isPaid, setIsPaid] = useState(false);

  const currentIndex = STEPS.findIndex((step) => step.id === currentStep);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === STEPS.length - 1;
  const currentStepInfo = STEPS[currentIndex];
  const canGoPrev =
    !isFirstStep &&
    !isLastStep &&
    (!isPaid || currentIndex - 1 > PAYMENT_INDEX);
  const canGoNext = !isLastStep && (currentStep !== "payment" || isPaid);

  const shouldSkip = (stepId: StepId) => {
    if (stepId === "additional-pets-info" && data.hasAdditionalPets !== true) {
      return true;
    }

    if (stepId === "pickup-address" && data.needsPickup !== true) {
      return true;
    }

    return false;
  };

  const getNextIndex = () => {
    let nextIndex = currentIndex + 1;

    while (nextIndex < STEPS.length && shouldSkip(STEPS[nextIndex].id)) {
      nextIndex += 1;
    }

    return nextIndex;
  };

  const getPrevIndex = () => {
    let prevIndex = currentIndex - 1;

    while (prevIndex >= 0 && shouldSkip(STEPS[prevIndex].id)) {
      prevIndex -= 1;
    }

    return prevIndex;
  };

  const goNext = () => {
    if (!canGoNext) {
      return;
    }

    setCurrentStep(STEPS[getNextIndex()].id);
  };

  const goPrev = () => {
    if (!canGoPrev) {
      return;
    }

    setCurrentStep(STEPS[getPrevIndex()].id);
  };

  const updateOwner = (fields: Partial<Owner>) => {
    setData((prev) => ({ ...prev, owner: { ...prev.owner, ...fields } }));
  };

  const updatePet = (fields: Partial<Pet>) => {
    setData((prev) => ({ ...prev, pet: { ...prev.pet, ...fields } }));
  };

  const updateData = (fields: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const pay = () => {
    setIsPaid(true);
    setCurrentStep(STEPS[getNextIndex()].id);
  };

  return {
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
  };
}
