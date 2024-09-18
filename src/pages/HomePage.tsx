import { Container } from "./../components/Container";
import { Text } from "./../components/Text";
import { Button } from "./../components/Button";
import { Card, CardTop, CardBottom } from "./../components/Card";

export function HomePage() {
  return (
      <Container background="#fff" padding="29">
        <Text text="Project Example!!!" fontSize="36"></Text>
        <Container background="#fbeefc" padding="20">
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Button size="large" variant="outlined" color="secondary" onClickScript="alert('Вы кто такие?!')">Click me</Button>
        </Container>
        <Card background="#ffffff" padding="20">
          <CardTop>
            <Text text="Some cool card" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Container background="#0b0a0a" padding="100"></Container>
      </Container>
  );
}