import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from 'react';
import * as S from './styles';

interface TextFieldProps {
  label?: string;
  id?: string;
  kind: string;
  name?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  maxLength?: number;
  values?: any;
  formik: any;
  options?: {
    label: string;
    name?: string;
    keyId?: any;
    value: number | string;
    color?: string;
  }[];
}

interface checkboxItem {
  keyId: string;
  value: string | number;
  label: string;
}
export const TextFieldC: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  let key = props.id as keyof typeof props.formik.values;
  const [isError, _] = useState(props.formik.errors[key]);

  const [showOtherInput, setShowOtherInput] = useState(false);

  const addNewItem = (
    formik: any,
    key: keyof typeof props.formik.values,
    item: any,
  ) => {
    let arrContent = formik.values[key];

    //console.log(`aqui e o item`, arrContent);
    let existValue = formik.values[key]?.some(
      (itemFormik: any) => itemFormik.value === item.value,
    );

    if (existValue === false) {
      arrContent.push(item);
      formik.setFieldValue(key, arrContent);
    }
    return;
  };

  // console.log(props.formik.values[key]);
  const removeItem = (item: checkboxItem) => {
    let checkBoxArray = props.formik.values[key];

    checkBoxArray = checkBoxArray?.filter((itemFormik: checkboxItem) => {
      itemFormik.keyId !== item.keyId;
    });

    return props.formik.setFieldValue(key, checkBoxArray);
  };

  const changeOtherValue = (inputValue: string) => {
    let arr = props.formik.values[key];

    arr = arr.map((item: checkboxItem) => {
      if (item.keyId === 'others') {
        return { ...item, value: inputValue };
      } else return item;
    });

    props.formik.setFieldValue(key, arr);
  };

  return (
    <S.Container isError={isError} className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>

      {props.kind === 'input' && (
        <>
          <input
            type={props.type}
            id={props.id}
            name={props.name}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={props.formik.handleChange}
            value={props.formik.values[key]}
          />
        </>
      )}

      {props.kind === 'complexInput' && (
        <>
          <input
            type={props.type}
            id={props.id}
            name={props.name}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={props.formik.handleChange}
            value={props.formik.values[key]}
          />
        </>
      )}
      {props.kind === 'select' && (
        <>
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              props.formik.setFieldValue(key, e.target.value);
            }}
            value={props.formik.values[key]}
          >
            {props.values?.map((option: string) => (
              <option>{option}</option>
            ))}
          </select>
          {props.formik.values[key] === 'Sim.' ? (
            <p>{props.placeholder}</p>
          ) : null}
        </>
      )}

      {props.kind === 'radio' && (
        <S.RadioContainer>
          {props.options?.map((option, index) => {
            if (index === 0)
              return (
                <li>
                  <S.RadioInput
                    inputColor={option.color}
                    defaultChecked
                    type={props.kind}
                    name={option.name}
                    value={option.value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      props.formik.setFieldValue(key, e.target.value);
                    }}
                  />
                  <label>{option.label}</label>
                </li>
              );
            return (
              <li>
                <S.RadioInput
                  inputColor={option.color}
                  type={props.kind}
                  name={option.name}
                  value={option.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    props.formik.setFieldValue(key, e.target.value);
                  }}
                />
                <label>{option.label}</label>
              </li>
            );
          })}
        </S.RadioContainer>
      )}

      {props.kind === 'checkbox' && (
        <S.CheckboxContainer>
          {props.options?.map((item, index) => (
            <>
              <li key={index + item.label}>
                <input
                  id={item.keyId}
                  type={props.kind}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if (item.keyId === 'others') {
                      setShowOtherInput(e.target.checked);
                    }
                    if (e.target.checked) {
                      addNewItem(props.formik, key, item as checkboxItem);
                    } else {
                      removeItem(item as checkboxItem);
                    }
                  }}
                />
                <label>{item.label}</label>
              </li>
              {item.keyId === 'others' && showOtherInput && (
                <li className="otherInput">
                  <input
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      //return props.formik;
                      changeOtherValue(e.target.value);
                    }}
                  />
                </li>
              )}
            </>
          ))}
        </S.CheckboxContainer>
      )}

      <S.ErrorContainer>
        {props.formik.touched[key] && props.formik.errors[key] ? (
          <p>{props.formik.errors[key]}</p>
        ) : null}
      </S.ErrorContainer>
    </S.Container>
  );
};
