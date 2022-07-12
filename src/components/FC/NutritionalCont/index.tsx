import * as S from './styles';

export const NutritionalCont = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>Ficha nutricional</h1>
      </S.Title>

      <h2>Dados de Saúde</h2>

      <S.NutriSelect>
        <span>Tipo sanguíneo:</span>
        <select name="type" id="type">
          <option value="typeA">A</option>
          <option value="typeB">B</option>
          <option value="typeAB">AB</option>
          <option value="typeO">O</option>
        </select>

        <span>Doenças que o estudante teve:</span>
        <select name="illness" id="illness">
          <option value="typeA">A</option>
          <option value="typeB">B</option>
          <option value="typeAB">AB</option>
          <option value="typeO">O</option>
        </select>

        <span>
          Em caso de emergência, a <br />
          escola está autorizada a <br /> encaminhá-lo a um hospital?
        </span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Sim - Qual? informe nome e endereço do hospital</span>
        <input type="text" />

        <span>Problemas no crescrimento? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Teve atraso no desenvolvimento? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Alergias, Se sim especificar quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Tem alguma dificuldade de:</span>
        <select name="illness" id="illness">
          <option value="typeA">A</option>
          <option value="typeB">B</option>
          <option value="typeAB">AB</option>
          <option value="typeO">O</option>
        </select>

        <span>
          Tem ou teve problemas no coração? Se sim faz <br /> acompanhamento?
        </span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Tem alguma deficiência? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Utiliza alguma prótese? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>
          Já teve algum desmaio e/ou convulsão? <br />
          Se sim faz acompanhamento?
        </span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Tem problemas na coluna? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Já teve alguma fratura? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>

        <span>Já foi submetido a cirurgia? Se sim quais?</span>
        <select name="yesOrno" id="">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </S.NutriSelect>
    </S.Container>
  );
};
