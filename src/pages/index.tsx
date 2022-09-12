import type { NextPage } from 'next';
import medicalRecord from '../assets/Gifss/medicalRecord.gif';
import formSuccess from '../assets/Gifss/formSuccess.gif';
import errorForm from '../assets/Gifss/errorForm.gif';
import { FeedbackPage } from '../components/FC';

const Home: NextPage = () => {
  let currentPage = 'initial';

  return (
    <div>
      {currentPage === 'initial' && (
        <FeedbackPage buttonEnabled={true} image={medicalRecord}>
          <h1>
            Olá, verediano, você está
            <br />
            preste a preencher a ficha
            <br />
            médica e nutricional para
            <br />
            seus filhos(@).
          </h1>
        </FeedbackPage>
      )}

      {currentPage === 'success' && (
        <FeedbackPage buttonEnabled={false} image={formSuccess}>
          <h1>
            Formulário preenchido
            <br />
            com sucesso!
          </h1>
        </FeedbackPage>
      )}
      {currentPage === 'failed' && (
        <FeedbackPage buttonEnabled={false} image={errorForm}>
          <h1>
            Opps!
            <br />
            Formulário já preenchido!
          </h1>
        </FeedbackPage>
      )}
    </div>
  );
};

export default Home;
