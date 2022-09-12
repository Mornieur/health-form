import { useFormik } from 'formik';
import * as yup from 'yup';
import * as Options from '../Content';

const healthYupShema = yup.object().shape({
  diet: yup
    .string()
    .oneOf(Options.nutritionaldiet, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  restrictionDiet: yup.string().nullable(true),
  observationsDiet: yup.string().nullable(true),
  heathInsuranceNumber: yup.string().nullable(true),
  healthInsuranceName: yup.string().nullable(true),
  healthInsurance: yup
    .string()
    .oneOf(Options.genericValues, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  healthInsuranceHolder: yup.string().nullable(true),
  hospitalizationSummary: yup.string().nullable(true),
  specializedTreatments: yup.boolean().nullable(true),
  anxietyDepression: yup.string().nullable(true),
  educationalTreatmentSpecial: yup.string().nullable(true),
  continuousMedications: yup
    .string()
    .oneOf(Options.genericValues, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  vaccinationCalendar: yup
    .string()
    .oneOf(Options.calendarUpdate, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  otherInformations: yup.string().nullable(true),
  diabetes: yup
    .string()
    .oneOf(Options.genericValuesTwo, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  diabetesSummary: yup.string().nullable(true),
  obesity: yup
    .string()
    .oneOf(Options.genericValuesTwo, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  obesityHistory: yup.string().nullable(true),
  eatingDisorder: yup.string().nullable(true),
  allergiesDiet: yup.string().nullable(true),

  physicalActivity: yup.string().nullable(true),

  glutenIntolerance: yup
    .string()
    .oneOf(Options.genericValues, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  medicalReport: yup.string().nullable(true),
  lactoseIntolerance: yup
    .string()
    .oneOf(Options.genericValues, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  medicalReportTwo: yup.string().nullable(true),
  bloodType: yup
    .string()
    .oneOf(Options.bloodTypes, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  illness: yup.boolean().nullable(true),
  hospitalAuthorization: yup
    .string()
    .oneOf(Options.genericValues, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  hospital: yup.string().nullable(true),
  medicationTimeAndDosage: yup.string().nullable(true),

  growthProblems: yup.string().nullable(true),
  delayedDevelopmentSummary: yup.string().nullable(true),
  allergies: yup.boolean().nullable(true),
  difficulties: yup.boolean().nullable(true),
  heartProblem: yup
    .string()
    .oneOf(Options.heartProblemStudent, 'Nome Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  deficiency: yup.string().nullable(true),
  prosthesis: yup.string().nullable(true),
  faintingOrConvulsion: yup
    .string()
    .oneOf(Options.genericValuesTwo, 'Nome Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  faintingOrConvulsionSummary: yup.string().nullable(true),
  spineProblemSummary: yup.string().nullable(true),
  fractures: yup.string().nullable(true),
  surgeries: yup.string().nullable(true),
  contactNameOne: yup.string().nullable(true),
  contactKinshipOne: yup
    .string()
    .oneOf(Options.contactsKinship, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  contactPhoneOne: yup.string().nullable(true),
  contactNameTwo: yup.string().nullable(true),
  contactKinshipTwo: yup
    .string()
    .oneOf(Options.contactsKinship, 'Tipo Obrigatório')
    .test('isDefaultOption', '*Etapa Obrigatória.', (value) => {
      if (value === 'Selecionar') return false;
      return true;
    }),
  contactPhoneTwo: yup.string().nullable(true),
});

export const SchemaNutri = () => {
  const formik = useFormik({
    initialValues: {
      diet: Options.nutritionaldiet[0],
      restrictionDiet: null,
      observationsDiet: null,
      healthInsurance: Options.genericValues[0],
      heathInsuranceNumber: null,
      healthInsuranceName: null,
      illness: null,
      healthInsuranceHolder: null,
      hospitalizationSummary: null,
      specializedTreatments: null,
      educationalTreatmentSpecial: null,
      continuousMedications: Options.genericValues[0],
      vaccinationCalendar: Options.calendarUpdate[0],
      otherInformations: null,
      diabetes: Options.genericValuesTwo[0],
      diabetesSummary: null,
      obesity: Options.genericValuesTwo[0],
      obesityHistory: null,
      eatingDisorder: null,
      allergiesDiet: null,
      physicalActivity: null,
      glutenIntolerance: Options.genericValues[0],
      lactoseIntolerance: Options.genericValues[0],

      //

      bloodType: Options.bloodTypes[0],
      hospitalAuthorization: Options.genericValues[0],
      hospital: null,
      medicationTimeAndDosage: null,
      growthProblems: null,
      delayedDevelopmentSummary: null,
      allergies: null,
      difficulties: null,
      heartProblem: Options.heartProblemStudent[0],
      deficiency: null,
      prosthesis: null,
      faintingOrConvulsion: Options.genericValuesTwo[0],
      faintingOrConvulsionSummary: null,
      spineProblemSummary: null,
      fractures: null,
      surgeries: null,
      contactNameOne: null,
      contactKinshipOne: Options.contactsKinship[0],
      contactPhoneOne: null,
      contactNameTwo: null,
      contactKinshipTwo: Options.contactsKinship[0],
      contactPhoneTwo: null,
      anxietyDepression: null,
    },
    validateOnBlur: true,
    validationSchema: healthYupShema,

    onSubmit: (values) => {
      console.log(values, 'dfdffddf');
    },
  });

  return { formikNutri: formik };
};
