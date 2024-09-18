export type TText = {
  text?: string;
  fontSize?: number | number[] | string;
  textAlign?: "left" | "right" | "center" | "justify";
  size?: string;
};

export function Text({ text, fontSize, textAlign }: TText) {
  return <p style={{ fontSize: fontSize + "px", textAlign }}>{text}</p>;
}
