import { TextFieldC } from '../../FC/TextField';
import { FormEvent, useEffect, useState } from 'react';
import allInputs, {
  allInputsConv,
  allInputsPhones,
  InputsInitial,
} from './Content';
import { SchemaNutri } from './SchemaNutri';
import * as S from './styles';
import { AiFillCaretRight } from 'react-icons/ai';
import { formatPhone } from '../../../utils/formatPhone';
import { useMedicalRecords } from '../../../global/services/POST/useHealthForm';
import { toast } from 'react-toastify';

export const NutritionalStep: React.FC = () => {
  const { addNewMedicalRecords } = useMedicalRecords();

  const SubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      toast.promise(
        async () => {
          await addNewMedicalRecords(formikNutri.values);
        },
        {
          success: 'Dados do aluno buscados com sucesso',
          pending: 'Carregando...',
          error: 'Erro ao buscar os dados do aluno',
        },
        {
          autoClose: 1000,
        },
      );
    } catch (error) {
      console.log(error, 'Erro aqui!');
    }
  };
  const { formikNutri } = SchemaNutri();
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    let inputMedication: any = document.getElementById(
      'medicationTimeAndDosage',
    );
    if (!formikNutri.values['continuousMedications'].includes('Sim')) {
      inputMedication.className = 'disabled';
    } else {
      inputMedication.className = '';
    }
  }, [formikNutri.values.continuousMedications]);

  // useEffect(() => {
  //   let inputRestrictionDiet: any = (document.getElementById(
  //     'restrictionDiet',
  //   )!.style.opacity = '0.5');
  //   //console.log(opacityEnabledTen);
  //   if (formikNutri.values['diet'] !== 'Sim, faço acompanhamento') {
  //     inputRestrictionDiet = true;
  //   } else {
  //     inputRestrictionDiet = false;
  //   }
  // }, [formikNutri.values['diet']]);

  useEffect(() => {
    let inputRestrictionDiet: any = document.getElementById('restrictionDiet');
    if (!formikNutri.values['diet'].includes('Sim')) {
      inputRestrictionDiet.className = 'disabled';
    } else {
      inputRestrictionDiet.className = '';
    }
  }, [formikNutri.values.diet]);

  useEffect(() => {
    let inputHospAuthorization: any = document.getElementById('hospital');
    if (!formikNutri.values['hospitalAuthorization'].includes('Sim')) {
      inputHospAuthorization.className = 'disabled';
    } else {
      inputHospAuthorization.className = '';
    }
  }, [formikNutri.values.hospitalAuthorization]);

  // useEffect(() => {
  //   let inputHospAuthorization: any = (document.getElementById(
  //     'hospital',
  //   )!.style.opacity = '0.5');
  //   //console.log(opacityEnabledTen);
  //   if (formikNutri.values['hospitalAuthorization'] !== 'Sim') {
  //     inputHospAuthorization = true;
  //   } else {
  //     inputHospAuthorization = false;
  //   }
  // }, [formikNutri.values['hospitalAuthorization']]);

  //

  useEffect(() => {
    let inputHealthInsuranceNumber: any = document.getElementById(
      'heathInsuranceNumber',
    );
    if (!formikNutri.values['healthInsurance'].includes('Sim')) {
      inputHealthInsuranceNumber.className = 'disabled';
    } else {
      inputHealthInsuranceNumber.className = '';
    }
  }, [formikNutri.values.healthInsurance]);

  useEffect(() => {
    let inputHealthInsuranceName: any = document.getElementById(
      'healthInsuranceName',
    );
    if (!formikNutri.values['healthInsurance'].includes('Sim')) {
      inputHealthInsuranceName.className = 'disabled';
    } else {
      inputHealthInsuranceName.className = '';
    }
  }, [formikNutri.values.healthInsuranceName]);

  useEffect(() => {
    let InputHealthInsuranceHolder: any = document.getElementById(
      'healthInsuranceHolder',
    );
    if (!formikNutri.values['healthInsurance'].includes('Sim')) {
      InputHealthInsuranceHolder.className = 'disabled';
    } else {
      InputHealthInsuranceHolder.className = '';
    }
  }, [formikNutri.values.healthInsuranceHolder]);

  // useEffect(() => {
  //   let opacityEnabledNine: any = (document.getElementById(
  //     'obesityHistory',
  //   )!.style.opacity = '0.5');
  //   //console.log(opacityEnabledNine);
  //   if (formikNutri.values['obesity'] !== 'Sim, faço acompanhamento') {
  //     opacityEnabledNine = true;
  //   } else {
  //     opacityEnabledNine = false;
  //   }
  // }, [formikNutri.values['obesity']]);

  useEffect(() => {
    let opacityEnabledNine: any = document.getElementById('obesityHistory');
    if (!formikNutri.values['obesity'].includes('Sim')) {
      opacityEnabledNine.className = 'disabled';
    } else {
      opacityEnabledNine.className = '';
    }
  }, [formikNutri.values.obesity]);

  // useEffect(() => {
  //   let opacityEnabledTen: any = (document.getElementById(
  //     'diabetesSummary',
  //   )!.style.opacity = '0.5');
  //   //console.log(opacityEnabledTen);
  //   if (formikNutri.values['diabetes'] !== 'Sim, faço acompanhamento') {
  //     opacityEnabledTen = true;
  //   } else {
  //     opacityEnabledTen = false;
  //   }
  // }, [formikNutri.values['diabetes']]);

  useEffect(() => {
    let opacityEnabledTen: any = document.getElementById('diabetesSummary');
    if (!formikNutri.values['diabetes'].includes('Sim')) {
      opacityEnabledTen.className = 'disabled';
    } else {
      opacityEnabledTen.className = '';
    }
  }, [formikNutri.values.diabetes]);

  useEffect(() => {
    let opacityEnabledEleven: any = (document.getElementById(
      'medicationTimeAndDosage',
    )!.style.opacity = '0.5');
    //console.log(opacityEnabledEleven);
    if (formikNutri.values['continuousMedications'].includes('Sim')) {
      opacityEnabledEleven = true;
    } else {
      opacityEnabledEleven = false;
    }
  }, [formikNutri.values['continuousMedications']]);

  // useEffect(() => {
  //   let opacityEnabledTwelve: any = (document.getElementById(
  //     'faintingOrConvulsionSummary',
  //   )!.style.opacity = '0.5');
  //   //console.log(opacityEnabledTwelve);
  //   if (formikNutri.values['faintingOrConvulsion'].includes('Sim')) {
  //     opacityEnabledTwelve = true;
  //   } else {
  //     opacityEnabledTwelve = false;
  //   }
  // }, [formikNutri.values['faintingOrConvulsion']]);

  useEffect(() => {
    let opacityEnabledTwelve: any = document.getElementById(
      'faintingOrConvulsionSummary',
    );
    if (!formikNutri.values['faintingOrConvulsion'].includes('Sim')) {
      opacityEnabledTwelve.className = 'disabled';
    } else {
      opacityEnabledTwelve.className = '';
    }
  }, [formikNutri.values.faintingOrConvulsion]);

  //

  useEffect(() => {
    if (showErrors) {
      setTimeout(() => setShowErrors(false), 1000);
    }
  }, [showErrors]);

  useEffect(() => {
    let inputDisableOne = document.getElementById(
      'medicationTimeAndDosage',
    ) as HTMLInputElement;
    //console.log(inputDisableOne);

    if (formikNutri.values['continuousMedications'].includes('Sim')) {
      inputDisableOne.disabled = false;
    } else {
      inputDisableOne.disabled = true;
    }
  }, [formikNutri.values['continuousMedications']]);

  useEffect(() => {
    let inputDisableTwo = document.getElementById(
      'heathInsuranceNumber',
    ) as HTMLInputElement;
    //console.log(inputDisableTwo);

    if (formikNutri.values['healthInsurance'].includes('Sim')) {
      inputDisableTwo.disabled = false;
    } else {
      inputDisableTwo.disabled = true;
    }
  }, [formikNutri.values['healthInsurance']]);

  useEffect(() => {
    let inputDisableThree = document.getElementById(
      'healthInsuranceName',
    ) as HTMLInputElement;
    //console.log(inputDisableThree);

    if (formikNutri.values['healthInsurance'].includes('Sim')) {
      inputDisableThree.disabled = false;
    } else {
      inputDisableThree.disabled = true;
    }
  }, [formikNutri.values['healthInsurance']]);

  useEffect(() => {
    let inputDisableFour = document.getElementById(
      'healthInsuranceHolder',
    ) as HTMLInputElement;
    //console.log(inputDisableFour);

    if (formikNutri.values['healthInsurance'].includes('Sim')) {
      inputDisableFour.disabled = false;
    } else {
      inputDisableFour.disabled = true;
    }
  }, [formikNutri.values['healthInsurance']]);

  useEffect(() => {
    let inputDisableFive = document.getElementById(
      'restrictionDiet',
    ) as HTMLInputElement;
    //console.log(inputDisableFive);

    if (formikNutri.values['diet'].includes('Dieta com restrições.')) {
      inputDisableFive.disabled = false;
    } else {
      inputDisableFive.disabled = true;
    }
  }, [formikNutri.values['diet']]);

  useEffect(() => {
    let inputDisableSix = document.getElementById(
      'hospital',
    ) as HTMLInputElement;

    if (formikNutri.values['hospitalAuthorization'].includes('Sim')) {
      inputDisableSix.disabled = false;
    } else {
      inputDisableSix.disabled = true;
    }
  }, [formikNutri.values['hospitalAuthorization']]);

  useEffect(() => {
    let inputDisableNine = document.getElementById(
      'obesityHistory',
    ) as HTMLInputElement;
    //console.log(inputDisableNine);

    if (formikNutri.values['obesity'].includes('Sim')) {
      inputDisableNine.disabled = false;
    } else {
      inputDisableNine.disabled = true;
    }
  }, [formikNutri.values['obesity']]);

  useEffect(() => {
    let inputDisableTen = document.getElementById(
      'diabetesSummary',
    ) as HTMLInputElement;
    //console.log(inputDisableTen);

    if (formikNutri.values['diabetes'].includes('Sim')) {
      inputDisableTen.disabled = false;
    } else {
      inputDisableTen.disabled = true;
    }
  }, [formikNutri.values['diabetes']]);

  useEffect(() => {
    let inputDisableEleven = document.getElementById(
      'medicationTimeAndDosage',
    ) as HTMLInputElement;
    //console.log(inputDisableEleven);

    if (formikNutri.values['continuousMedications'].includes('Sim')) {
      inputDisableEleven.disabled = false;
    } else {
      inputDisableEleven.disabled = true;
    }
  }, [formikNutri.values['continuousMedications']]);

  useEffect(() => {
    let inputDisableTwelve = document.getElementById(
      'faintingOrConvulsionSummary',
    ) as HTMLInputElement;
    //console.log(inputDisableTwelve);

    if (formikNutri.values['faintingOrConvulsion'].includes('Sim')) {
      inputDisableTwelve.disabled = false;
    } else {
      inputDisableTwelve.disabled = true;
    }
  }, [formikNutri.values['faintingOrConvulsion']]);

  //

  useEffect(() => {
    formatPhone(
      formikNutri.values.contactPhoneOne,
      'contactPhoneOne',
      formikNutri,
    );
  }, [formikNutri.values.contactPhoneOne]);

  useEffect(() => {
    formatPhone(
      formikNutri.values.contactPhoneTwo,
      'contactPhoneTwo',
      formikNutri,
    );
  }, [formikNutri.values.contactPhoneTwo]);

  // console.log([formikNutri.values.lactoseIntolerance], 'Aqui');

  return (
    <S.Container>
      <form id="health-form" onSubmit={(e: FormEvent) => SubmitForm(e)}>
        <section>
          <h3>Dados Nutricionais</h3>
          <p className="emergencyCase">
            Lembrando que em nossa escola há acompanhamento nutricional de uma
            profissional da área. Portanto, cada informação é essencial para o
            cuidado com os nossos estudantes.
          </p>
          <S.Grid>
            {InputsInitial.map((item, index) => {
              if (item.kind !== 'title')
                return (
                  <div key={index}>
                    <TextFieldC {...item} formik={formikNutri} />
                  </div>
                );
            })}
          </S.Grid>
        </section>
        <section>
          <h3>Dados de Saúde</h3>

          <S.Grid>
            {allInputs.map((item, index) => {
              if (item.kind !== 'title')
                return (
                  <div key={index}>
                    <TextFieldC {...item} formik={formikNutri} />
                  </div>
                );
            })}
          </S.Grid>
        </section>

        <section>
          <h3>Dados de Encaminhamento Hospitalar:</h3>
          <S.Grid>
            {allInputsConv.map((item, index) => {
              if (item.kind !== 'title')
                return (
                  <div key={index}>
                    <TextFieldC {...item} formik={formikNutri} />
                  </div>
                );
            })}
          </S.Grid>
        </section>

        <section>
          <h3>CONTATOS PARA EMERGÊNCIAS:</h3>
          <p className="emergencyCase">
            Em caso de emergência, não sendo localizados os pais ou responsáveis
            pelo(a) estudante, indicar abaixo outros contatos para avisos:
          </p>
          <S.Grid>
            {allInputsPhones.map((item, index) => {
              if (item.kind !== 'title' && item.kind !== 'checkbox')
                return (
                  <div key={index}>
                    <TextFieldC {...item} formik={formikNutri} />
                  </div>
                );
            })}
          </S.Grid>

          <div>
            {allInputsPhones.map((item, index) => {
              if (item.kind === 'checkbox')
                return (
                  <div key={index}>
                    <TextFieldC {...item} formik={formikNutri} />
                  </div>
                );
            })}
          </div>
        </section>

        <button type="submit" form="health-form">
          Próximo
          <AiFillCaretRight />
        </button>

        <button type="submit">POSTAR</button>
      </form>
    </S.Container>
  );
};
