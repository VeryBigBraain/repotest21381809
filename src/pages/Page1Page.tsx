import { Container } from "./../components/Container";
import { Text } from "./../components/Text";
import { Card, CardTop, CardBottom } from "./../components/Card";
import { Button } from "./../components/Button";

export function Page1Page() {
  return (
      <Container background="#fff" padding="29">
        <Text text="page1" fontSize="20"></Text>
        <Card background="red" padding="20">
          <CardTop>
            <Text text="Title" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
      </Container>
  );
}