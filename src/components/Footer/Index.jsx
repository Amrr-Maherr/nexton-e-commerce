"use client";
import { motion } from "motion/react";
import BottomFooter from "../Footer/Elements/BottomFooter";
import Logo from "../Header/Elements/Logo";
import FooterLink from "./Elements/FooterLink";
import FooterLinkTitle from "./Elements/FooterLinkTitle";
import SocialMediaIcons from "./Elements/SocialMediaIcons";
import { Facebook, Youtube, Send, Twitter } from "lucide-react";

export default function Index() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <footer className="px-6 md:px-12 lg:px-[120px] flex items-center justify-center flex-col border-t border-solid border-[#E7E7E7]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[60px] gap-10 w-full">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
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
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <FooterLinkTitle LinkTitle="Shop" />
            <FooterLink LinkText="New Arrivals" />
            <FooterLink LinkText="Best Sellers" />
            <FooterLink LinkText="Offers & Deals" />
            <FooterLink LinkText="Gift Cards" />
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <FooterLinkTitle LinkTitle="Customer Service" />
            <FooterLink LinkText="Order Tracking" />
            <FooterLink LinkText="Returns & Exchanges" />
            <FooterLink LinkText="Shipping Info" />
            <FooterLink LinkText="FAQs" />
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <FooterLinkTitle LinkTitle="About Us" />
            <FooterLink LinkText="Our Story" />
            <FooterLink LinkText="Careers" />
            <FooterLink LinkText="Blog" />
            <FooterLink LinkText="Contact Us" />
          </motion.div>
        </div>
      </footer>

      <BottomFooter />
    </>
  );
}
