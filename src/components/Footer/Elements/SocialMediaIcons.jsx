export default function SocialMediaIcons({SocialTitle,SocialIcon}) {
    return (
      <>
        <div className="flex items-center justify-center gap-[15px] mt-[12px] flex-row-reverse">
          <p className="text-[16px] text-[#4B5563] font-normal">{SocialTitle}</p>
          <p className="icon">{SocialIcon}</p>
        </div>
      </>
    );
}