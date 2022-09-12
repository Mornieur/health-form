import Link from 'next/link';
import * as S from './styles';
import { AiFillCaretRight } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export const GeneralTermsComp = () => {
  // const checkbox = document.getElementById(
  //   'subscribe',
  // ) as HTMLInputElement | null;

  // if (checkbox != null) {
  //   checkbox.checked = true;
  // }
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showAdiviceText, setShowAdviceText] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  //console.log(buttonRef.current?.disabled);
  console.log(acceptedTerms);

  useEffect(() => {
    if (acceptedTerms === false) {
      buttonRef.current!.className = 'disabled-btn';
    } else {
      buttonRef.current!.className = '';
    }
  }, [acceptedTerms]);

  function manipulateTerms() {
    if (acceptedTerms === false) {
      setShowAdviceText(true);
    } else {
      router.push('/');
    }
  }

  return (
    <S.Container>
      <S.CompTermOne>
        <h1>TERMOS GERAIS:</h1>
        <article>
          <p>
            1. O RESPONSÁVEL LEGAL DECLARA, neste termo, que as informações
            acima prestadas são verdadeiras, assumindo-se unicamente responsável
            por omissões ou contradições nos dados informados acerca do(a)
            aluno(a), compreendendo a
            <br />
            <br />
            imprescindibilidade de manter todas as certidões e atestados
            devidamente atualizados, isentando integralmente a VEREDA de
            qualquer ato ou omissão que viole a presente Cláusula.
            <br />
            <br />
            2. Se houver necessidade de medicação contínua a ser realizada
            durante o horário letivo, a VEREDA poderá, mas não estará obrigada,
            a administrar o(s) medicamento(s) descritos no 'Item 22' da Ficha de
            Saúde do(a) aluno(a) conforme orientações fornecidas pelo
            RESPONSÁVEL LEGAL, e nos termos do atestado médico válido
            apresentado.
            <br />
            <br />
            2.1. Sob nenuma hipótede a VEREDA disponibilizará o(s)
            medicamento(s) de utilização contínua declarado no 'Item 22' da
            Ficha de Saúde do(a) aluno(a), sendo de responsabilidade do
            RESPONSÁVEL LEGAL a aquisição sob prescrição médica e transporte,
            inclusive se feito pelo(a) aluno(a).
            <br />
            <br />
            2.2. A VEREDA não será responsável por ministrar medicamento(s) que
            exija(m) capacitação médica. O RESPONSÁVEL LEGAL, neste ato, isenta
            integralmente a VEREDA de qualquer responsabilidade ou obrigação
            oriunda da aplicabilidade de tal(ais) medicamento(s), e se declara
            único, exclusivo e integralmente responsável pela administração
            do(s) medicamento(s), conteúdo do(s) frasco(s), efeitos colaterais,
            declarações fornecidas e demais informações e obrigações correlatas.
          </p>
        </article>
      </S.CompTermOne>
      <S.CompTermTwo>
        <article>
          <p>
            3. Em caso de ausência ou desatualização de atestado(s) médico(s)
            que comprove(m) ou embase(m) as informações declaradas no formulário
            acima, o RESPONSÁVEL LEGAL assume integralmente a responsabilidade
            sobre os atos consequentes relacionados ao(a) aluno(a).
            <br />
            <br />
            3.1. Não obstante, em caso de ausência ou desatualização de receita{' '}
            <br />
            médica, a VEREDA, sob nenhuma hipótese, administrará ou continuará{' '}
            <br />
            administrando quaisquer medicamentos de uso contínuo ao(a) aluno(a).
            <br />
            <br />
            4. Quaisquer alterações ocorridas nos dados contidos nesta ficha
            deverão ser imediatamente comunicados na Secretaria da Escola.
            <br />
            <br />
            5. Este documento, bem como todas as informações fornecidas pelo(s){' '}
            responsável(eis) legal(ais), possuem caráter sigiloso.
          </p>

          <footer>
            <S.AcceptedTerms>
              <label>
                <input
                  type="checkbox"
                  name="subscribe"
                  id="subscribe"
                  onChange={(e) => {
                    setAcceptedTerms(e.target.checked);
                  }}
                />
                Concordo com os termos e condições.
              </label>
              <button ref={buttonRef} onClick={manipulateTerms}>
                Enviar
                <AiFillCaretRight />
              </button>
            </S.AcceptedTerms>

            <S.WarningMessage>
              {showAdiviceText && <p>* Concorde com os termos e condições.</p>}
            </S.WarningMessage>
          </footer>
        </article>
      </S.CompTermTwo>
    </S.Container>
  );
};
