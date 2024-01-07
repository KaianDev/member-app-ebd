import Container from "./Container";
import Title from "./Title";

const LoadingData = () => {
  return (
    <Container className="p-6 flex flex-col items-center justify-center gap-8">
      <Title>Carregando dados...</Title>
    </Container>
  );
};

export default LoadingData;
