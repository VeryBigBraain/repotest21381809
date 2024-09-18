import { Container } from "./../components/Container";
import { Text } from "./../components/Text";
import { Card, CardTop, CardBottom } from "./../components/Card";
import { Button } from "./../components/Button";

export function NewsPage() {
  return (
      <Container background="#ecbfbf" padding="29">
        <Text text="news" fontSize="20"></Text>
        <Card background="#ffffff" padding="20">
          <CardTop>
            <Text text="This page not bad too" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Text text="Unbelievable" fontSize="29"></Text>
        <Card background="#c6f7eb" padding="20">
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