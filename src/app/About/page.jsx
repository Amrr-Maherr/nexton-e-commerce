import AboutSection from "./Elements/AboutSection";
import ContactForm from "./Elements/ContactForm";
import ContactInfo from "./Elements/ContactInfo";

export default function page() {
  return (
    <>
      <section>
        <div className="container py-[40px]">
          <div>
            <h1 className="text-[#111827] text-[36px] font-semibold mb-[12px]">
              About us
            </h1>
            <p className="max-w-[643px] text-[#4B5563] text-[16px] font-normal">
              We not only help you design exceptional products, but also make it
              easy for you to share your designs with more like-minded people.
            </p>
          </div>
          <AboutSection
            reverse={true}
            imageSrc="/images/image.png"
            title="Provide fashionable and qualifed products"
            text="Already millions of people are very satisfied by thi. s page builder and the number is growing more and more. Technolog developing, requirements are increasing. Riode has brought."
          />
          <AboutSection
            imageSrc="/images/image2.png"
            title="Provide fashionable and qualifed products"
            text="Already millions of people are very satisfied by thi. s page builder and the number is growing more and more. Technolog developing, requirements are increasing. Riode has brought."
          />
          <div className="flex items-center justify-center mt-[72px] flex-wrap md:flex-nowrap gap-8">
            <ContactInfo/>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
