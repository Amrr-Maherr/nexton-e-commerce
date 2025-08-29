import Button from "../Elements/Button";
import EmailInput from "../Elements/EmailInput";
import LineAcross from "../Elements/LineAcross";
import Link from "../Elements/Link";
import PasswordInput from "../Elements/PasswordInput";
import Title from "../Elements/Title";

export default function Login() {
    return (
      <>
        <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex items-center justify-center flex-col px-[24px] md:px-0">
          <Title TitleText="Login" />
          <EmailInput />
          <PasswordInput />
          <Button ButtonText="Continue" />
          <LineAcross />
          <Link linkText="Create an account" linkTitle="New user?" />
        </section>
      </>
    );
}