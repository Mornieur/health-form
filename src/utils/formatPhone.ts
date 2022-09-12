export const formatPhone = (number: string | null, id: string, formik: any) => {
  if (number) {
    const isCellPhone = number.trim().length === 11;

    console.log(number);
    if (isCellPhone) {
      number = number.replace(/[^\d]/g, '');
      let formattedNumber = number.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '($1)$2-$3',
      );
      formik.setFieldValue(id, formattedNumber);
    }
    if (!isCellPhone) return number;
  } else return null;
};
