import { useMutation } from 'react-query';
import { API } from '../api';

interface IPostTransport {
  transportName: string;
  vehicle: string;
  carPlate: string;
  driverName1: string;
  driver1Cpf: string;
  driver1Cell: string;
  unity: string;
  driver2Cpf?: string;
  driver2Cell?: string;
  driverName2?: string;
}

const addNewMedicalRecords = async (body: any) => {
  try {
    await API.post(`students/medicalRecords`, { medicalRecords: body });
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const useMedicalRecords = () => {
  const { mutateAsync, isSuccess } = useMutation(async (dataPost: any) => {
    await addNewMedicalRecords(dataPost),
      { onSuccess: () => console.log('Deu certo!') };
  });

  return {
    addNewMedicalRecords: mutateAsync,
    isSuccessPostMedicalRecords: isSuccess,
  };
};
