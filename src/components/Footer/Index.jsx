import BottomFooter from "../Footer/Elements/BottomFooter";
import Logo from "../Header/Elements/Logo";
import FooterLink from "./Elements/FooterLink";
import FooterLinkTitle from "./Elements/FooterLinkTitle";
import SocialMediaIcons from "./Elements/SocialMediaIcons";
import { Facebook, Youtube, Send, Twitter } from "lucide-react";

export default function Index() {
  return (
    <>
      <footer className="px-6 md:px-12 lg:px-[120px] flex items-center justify-center flex-col border-t border-solid border-[#E7E7E7]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[60px] gap-10 w-full">
          <div className="flex flex-col items-start">
            <Logo />
            <div className="flex flex-col gap-2 mt-4">
              <SocialMediaIcons
                SocialTitle="Facebook"
                SocialIcon={<Facebook className="text-[#1877F2]" />}
              />
              <SocialMediaIcons
                SocialTitle="Youtube"
                SocialIcon={<Youtube className="text-[#FF0000]" />}
              />
              <SocialMediaIcons
                SocialTitle="Telegram"
                SocialIcon={<Send className="text-[#0088CC]" />}
              />
              <SocialMediaIcons
                SocialTitle="Twitter"
                SocialIcon={<Twitter className="text-[#1DA1F2]" />}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <FooterLinkTitle LinkTitle="Getting started" />
            <FooterLink LinkText="Release Notes" />
            <FooterLink LinkText="Upgrade Guide" />
            <FooterLink LinkText="Browser Support" />
            <FooterLink LinkText="Dark Mode" />
          </div>

          <div className="flex flex-col">
            <FooterLinkTitle LinkTitle="Explore" />
            <FooterLink LinkText="Prototyping" />
            <FooterLink LinkText="Design systems" />
            <FooterLink LinkText="Pricing" />
            <FooterLink LinkText="Security" />
          </div>

          <div className="flex flex-col">
            <FooterLinkTitle LinkTitle="Community" />
            <FooterLink LinkText="Discussion Forums" />
            <FooterLink LinkText="Code of Conduct" />
            <FooterLink LinkText="Contributing" />
            <FooterLink LinkText="API Reference" />
          </div>
        </div>
      </footer>
      <BottomFooter />
    </>
  );
}
