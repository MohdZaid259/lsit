import Image from "next/image";
import ContactSection from "@/component/contact";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <>
      <div className="font-sans grid min-h-screen p-8 gap-16 sm:p-20 sm:pb-0">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
