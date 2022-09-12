import * as S from '../../styles/NutritionalPageStyles/styles';
import { NextPage } from 'next';
import logoFuturista from '../../assets/Icon-Vereda/logoFuturista.png';
import Head from 'next/head';
import { NutritionalStep } from '../../components/HealthStep/NutritionalStep';
import Image from 'next/image';

const NutritionalPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ficha de Saúde | ConsultPage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.View>
        <S.Container>
          <header>
            <Image
              className="image-header"
              alt="logoFuturistic"
              src={logoFuturista}
              width={70}
              height={70}
            />
            <h1>Ficha da(o) Estudante</h1>
          </header>

          <main>
            <NutritionalStep />
          </main>
        </S.Container>
      </S.View>
    </>
  );
};

export default NutritionalPage;
