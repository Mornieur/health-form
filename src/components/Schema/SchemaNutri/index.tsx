import { useFormik } from 'formik';
import * as yup from 'yup';

export const bloodType = ['A', 'B', 'AB', 'O'];
const healthYupShema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .test('isCorrectName', 'Sobrenome é necessário', (name) => {
      if (name) {
        name = name?.trim();
        let nameSplitted = name?.split(' ');

        return nameSplitted!.length >= 2;
      }
      return false;
    }),
  email: yup.string().email().required('O email é necessário'),
  cpf: yup.string().required('Cpf é um dado obrigatório'),
  adress: yup.string().required(),
  age: yup.number().required('O campo é obrigatório.'),
  professions: yup.string().oneOf(bloodType, 'suhdsudhu'),
  parcelTotal: yup.string(),
  languages: yup
    .array()
    .of(yup.string())
    .test(
      'isEmptyLanguage',
      'Escolha pelo menos uma língua',
      (value) => value?.length !== 0,
    ),
});

export const SchemaNutri = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      age: '',
      bloodType: bloodType[0],
      parcelTotal: '1x-360',
      languages: [],
    },
    validateOnBlur: true,
    validationSchema: healthYupShema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formikHealth: formik };
};
