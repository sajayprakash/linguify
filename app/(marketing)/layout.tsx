import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

type MarketingLayoutProps = {
  children: React.ReactNode;
};
function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
