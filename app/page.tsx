import { CategoriesSection, HeroSection, NotificationSubscriptionSection, ProductsSection, TestmonialsSection, WhyChooseUsSection } from "@/components/home";

export default function Home() {
  return (
    <main>
        <HeroSection />
        <WhyChooseUsSection />
        <CategoriesSection />
        <ProductsSection />
        <TestmonialsSection />
        <NotificationSubscriptionSection />
    </main>
  );
}
