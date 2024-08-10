import ConfigLayout from "./components/config/ConfigLayout";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function RootLayout({ children }: Props) {
  return <ConfigLayout>{children}</ConfigLayout>;
}
