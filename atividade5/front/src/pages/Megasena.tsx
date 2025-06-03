import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { LotteryContext } from "../contexts/LotteryContext";
import { Ball } from "../components/Ball";
import { ThemeProps, LotteryProps } from "../types";
import { getLotteryByNumber } from "../services/Lottery";

const Container = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme?.background};
  color: ${(props) => props.theme?.text};
  padding: 20px;
`;

const Title = styled.h1<ThemeProps>`
  color: ${(props) => props.theme?.text};
  margin-bottom: 30px;
`;

const BallsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const InfoText = styled.p<ThemeProps>`
  color: ${(props) => props.theme?.text};
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
`;

const Input = styled.input`
  letter-spacing: 0.02rem;
  cursor: pointer;
  color: #209869;
  background: transparent;
  border: 0.2rem solid currentColor;
  border-radius: 5px;
  padding: 0.5rem 0.6rem;
  font-size: 1em;
  position: fixed;
  transition: color 0.3s;
  z-index: 1;
  top: 1em;
  right: 1em;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  color: #209869;
  background: transparent;
  border-radius: 5px;
  border: 0.2rem solid currentColor;
  transition: background-color 0.3s;
  position: fixed;
  z-index: 1;
  top: 4em;
  right: 1em;
`;

const ErrorMessage = styled.p`
  color:rgb(207, 27, 27);
  font-weight: bold;
`;

export function Megasena() {
  const { megasena, loading, error } = useContext(LotteryContext);
  const [search, setSearch] = useState("");
  const [resultado, setResultado] = useState<LotteryProps | null>(megasena);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setResultado(megasena);
  }, [megasena]);

  const handleSearch = async () => {
    const numero = parseInt(search);
    if (isNaN(numero)) {
      setMensagem("DIGITE UM ID VÁLIDO");
      return;
    }

    try {
      const result = await getLotteryByNumber(numero);
      if (result) {
        setResultado(result);
        setMensagem("");
      } else {
        setMensagem("ID NÃO ENCONTRADO");
      }
    } catch (err) {
      setMensagem("ERRO AO BUSCAR ID");
      console.error("ERRO NA BUSCA", err);
    }
  };

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Title>ERRO</Title>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  if (!resultado) {
    return (
      <Container>
        <Title>Não foi possível carregar os dados</Title>
        <ErrorMessage>
          Os resultados não estão disponíveis no momento
        </ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Resultado Mega-Sena</Title>

      <div>
        <Input
          type="number"
          placeholder="Digite o id do concurso"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      {mensagem && <ErrorMessage>{mensagem}</ErrorMessage>}

      <InfoText>
        <b>Concurso: {resultado.numeroDoConcurso} - {resultado.dataPorExtenso}</b>
      </InfoText>

      <BallsContainer>
        {resultado.dezenas.map((dezena, index) => (
          <Ball key={index} number={dezena} />
        ))}
      </BallsContainer>
    </Container>
  );
}
