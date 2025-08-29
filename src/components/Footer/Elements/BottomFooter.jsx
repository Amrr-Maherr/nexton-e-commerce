import PaymentIcons from "./PaymentIcons";

export default function FooterLinkTitle() {
    return (
      <>
        <div className="w-full border-solid flex-wrap md:flex-nowrap border-t border-[#E7E7E7] flex items-center justify-between py-[20px] px-[50px] md:py-[32px] md:px-[120px] gap-[10px]">
          <div className="text-center w-full flex items-center justify-center text-[16px] text-[#4B5563]">
            <p>Nexton eCommerce.</p>
            <p>{new Date().getFullYear()}</p>
          </div>
          <PaymentIcons/>
        </div>
      </>
    );
}