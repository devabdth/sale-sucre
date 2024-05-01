import { CategoriesSection, HeroSection, NotificationSubscriptionSection, ProductsSection, TestmonialsSection, WhyChooseUsSection } from "@/components/home";

export default function Home() {
  return (
    <main>
        <HeroSection />
        <CategoriesSection />
        <WhyChooseUsSection />
        <ProductsSection />
        <TestmonialsSection />
        <NotificationSubscriptionSection />
    </main>
  );
}
