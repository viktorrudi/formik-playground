import { Text, TextProps } from "../Text";

type SimpleListProps = {
  component: "ul" | "ol";
  children: JSX.Element | JSX.Element[];
};
function SimpleList({ component = "ul", children }: SimpleListProps) {
  const Component = component;
  return <Component>{children}</Component>;
}

export type SimpleListItemProps = TextProps;
function SimpleListItem({ children }: SimpleListItemProps) {
  return (
    <li>
      <Text>{children}</Text>
    </li>
  );
}

SimpleList.Item = SimpleListItem;

export { SimpleList };
