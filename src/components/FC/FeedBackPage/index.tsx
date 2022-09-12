import * as S from './styles';
import LogoVereda from '../../../assets/Icon-Vereda/logoVereda.png';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
  children: ReactNode;
  image: StaticImageData;
  buttonEnabled: boolean;
}

export const FeedbackPage = ({ buttonEnabled, image, children }: IProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.ContOne>
          <Image
            className="imageLogo"
            src={LogoVereda}
            alt="logoVereda"
            width={200}
            height={60}
          />
          {children}
          {buttonEnabled && (
            <Link href="/NutritionalPage">
              <button>Continuar</button>
            </Link>
          )}
        </S.ContOne>
        <S.ContTwo>
          <Image
            className="imageGif"
            src={image}
            alt="medicalRecord"
            width={700}
            height={700}
          />
        </S.ContTwo>
      </S.Content>
    </S.Container>
  );
};
