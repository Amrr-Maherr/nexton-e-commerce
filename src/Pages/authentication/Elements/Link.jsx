export default function Link({linkTitle,linkText}) {
    return (
      <>
        <div className="flex items-center justify-center gap-0.5 text-[16px] font-normal">
          <p className="text-[#4B5563]">{linkTitle}</p>
          <p className="text-[#0EA5E9]">{linkText}</p>
        </div>
      </>
    );
}