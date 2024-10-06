import { useState } from 'react';
import PetKind from '../components/layout/FindPet/PetKind';
import PetGender from '../components/layout/FindPet/PetGender';
import PetWeight from '../components/layout/FindPet/PetWeight';
import PetColor from '../components/layout/FindPet/PetColor';
import PetLoad from '../components/layout/FindPet/PetLoad';
import PetResult from '../components/layout/FindPet/PetResult';

export default function FindPetPage() {
  const [step, setStep] = useState(0);
  // 각 단계에서 선택한 데이터를 담을 state
  const [petData, setPetData] = useState({
    kind: '', // 동물 종류
    gender: '', // 성별
    weight: '', // 체중
    color: '', // 색상
  });

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {step === 0 && (
        <PetKind
          petData={petData}
          setPetData={setPetData}
          onNext={handleNextStep}
        />
      )}
      {step === 1 && (
        <PetGender
          petData={petData}
          setPetData={setPetData}
          onNext={handleNextStep}
        />
      )}
      {step === 2 && (
        <PetWeight
          petData={petData}
          setPetData={setPetData}
          onNext={handleNextStep}
        />
      )}
      {step === 3 && (
        <PetColor
          petData={petData}
          setPetData={setPetData}
          onNext={handleNextStep}
        />
      )}
      {step === 4 && <PetLoad onNext={handleNextStep} />}
      {step === 5 && <PetResult petData={petData} setStep={setStep} />}
    </div>
  );
}
