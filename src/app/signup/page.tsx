"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name: string, image: string, email: string, password: string};
    console.log(user);
    const {data, error}= await authClient.signUp.email({
        ...user,
        callbackURL:"/"
    })
    if(data){
        console.log(data);
        redirect('/')
    }
    if(error){
        console.log(error)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl text-red-700 font-bold">সাইন আপ</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset rounded-box w-xs">
          <label className="label">নাম</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
