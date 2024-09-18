import { Container } from "./../components/Container";
import { Button } from "./../components/Button";
import { Card, CardTop, CardBottom } from "./../components/Card";
import { Text } from "./../components/Text";

export function HomePage() {
  return (
      <Container background="#fff" padding="29">
        <Button size="large" variant="contained" color="default" onClickScript="alert('hello')">Click me</Button>
        <Card background="#c08080" padding="20">
          <CardTop>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Text text="Title some text" fontSize="29"></Text>
        <Text text="New Project" fontSize="20"></Text>
        <Container background="#ffffff" padding="53">
          <Text text="Hi world" fontSize="20"></Text>
        </Container>
      </Container>
  );
}