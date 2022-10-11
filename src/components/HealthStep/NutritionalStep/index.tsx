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
import { useRouter } from 'next/router';

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
          success: 'Dados do paciente buscados com sucesso',
          pending: 'Carregando...',
          error: 'Erro ao buscar os dados do paciente',
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
    let inputHealthInsuranceNumber = document.getElementById(
      'view_healthInsuranceNumber',
    );
    let inputHealthInsuranceName = document.getElementById(
      'view_healthInsuranceName',
    );
    let inputHealthInsuranceHolder = document.getElementById(
      'view_healthInsuranceHolder',
    );
    let arr = [
      inputHealthInsuranceNumber,
      inputHealthInsuranceName,
      inputHealthInsuranceHolder,
    ];

    if (formikNutri.values['healthInsurance'] !== 'Sim.') {
      arr.map((item) => {
        if (item) return item!.classList.add('disabled');
      });
    } else {
      arr.map((item) => {
        if (item) return item!.classList.remove('disabled');
      });
    }
  }, [formikNutri.values.healthInsurance]);

  useEffect(() => {
    if (showErrors) {
      setTimeout(() => setShowErrors(false), 1000);
    }
  }, [showErrors]);

  useEffect(() => {
    let inputDisableTwo = document.getElementById(
      'healthInsuranceNumber',
    ) as HTMLInputElement | null;

    if (inputDisableTwo) {
      if (
        formikNutri.values['healthInsurance'] !== 'Não.' &&
        formikNutri.values['healthInsurance'] !== 'Selecionar'
      ) {
        inputDisableTwo.disabled = false;
      } else {
        inputDisableTwo.disabled = true;
      }
    }
  }, [formikNutri.values['healthInsurance']]);

  useEffect(() => {
    let inputDisableThree = document.getElementById(
      'healthInsuranceName',
    ) as any;

    if (
      formikNutri.values['healthInsurance'] !== 'Não.' &&
      formikNutri.values['healthInsurance'] !== 'Selecionar'
    ) {
      inputDisableThree.disabled = false;
    } else {
      inputDisableThree.disabled = true;
    }
  }, [formikNutri.values['healthInsurance']]);

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

  const router = useRouter();

  const submitForm = () => {
    formikNutri.handleSubmit();

    if (Object.values(formikNutri.errors).length === 0) {
      router.push('/ShippingConfirmation');
    }
  };
  return (
    <S.Container>
      <form id="health-form" onSubmit={formikNutri.handleSubmit}>
        <section>
          <h3>Dados Nutricionais</h3>
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
          Enviar
          <AiFillCaretRight />
        </button>
      </form>
    </S.Container>
  );
};
