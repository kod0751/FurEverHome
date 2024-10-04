import { useState } from 'react';
import PetKind from '../components/layout/FindPet/PetKind';
import PetGender from '../components/layout/FindPet/PetGender';
import PetWeight from '../components/layout/FindPet/PetWeight';
import PetColor from '../components/layout/FindPet/PetColor';
import PetLoad from '../components/layout/FindPet/PetLoad';
import PetResult from '../components/layout/FindPet/PetResult';

export default function FindPetPage() {
  const [step, setStep] = useState(5);
  return (
    <div>
      {step === 0 ? <PetKind /> : null}
      {step === 1 ? <PetGender /> : null}
      {step === 2 ? <PetWeight /> : null}
      {step === 3 ? <PetColor /> : null}
      {step === 4 ? <PetLoad /> : null}
      {step === 5 ? <PetResult /> : null}
    </div>
  );
}
