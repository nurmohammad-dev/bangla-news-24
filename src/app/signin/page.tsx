"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as 
    {email: string, password: string};

    console.log(user);

    const {data, error} = await authClient.signIn.email({
        ...user,
        callbackURL: "/"
    })

    if(data){
        toast.success("সাইন ইন সফল হয়েছে!")
        console.log(data);
    }

    if(error){
        toast.error(error.message)
        console.log(error);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl text-red-700 font-bold">সাইন ইন</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-xs">

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button type="submit" className="btn text-white bg-red-700 mt-4">সাইন ইন করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage