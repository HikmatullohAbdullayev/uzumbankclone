import Tender from "./page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function TenderLayout({ children }) {
  return (
    <section>
      <Tender />
    </section>
  );
}