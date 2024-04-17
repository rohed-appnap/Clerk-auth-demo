import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
