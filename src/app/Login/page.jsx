import Button from "../../components/authentication/Elements/Button";
import EmailInput from "../../components/authentication/Elements/EmailInput";
import LineAcross from "../../components/authentication/Elements/LineAcross";
import Link from "../../components/authentication/Elements/Link";
import PasswordInput from "../../components/authentication/Elements/PasswordInput";
import Title from "../../components/authentication/Elements/Title";

export default function Login() {
  return (
    <>
      <section className="pt-[40px] pb-[72px] max-w-[440px] mx-auto gap-[24px] flex items-center justify-center flex-col px-[24px] md:px-0">
        <Title TitleText="Login" />
        <EmailInput />
        <PasswordInput />
        <Button ButtonText="Continue" />
        <LineAcross />
        <Link
          href="/Register"
          linkText="Create an account"
          linkTitle="New user?"
        />
      </section>
    </>
  );
}
