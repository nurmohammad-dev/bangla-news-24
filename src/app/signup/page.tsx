import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl text-red-700 font-bold">সাইন আপ</h2>
      <form>
        <fieldset className="fieldset rounded-box w-xs">

          <label className="label">নাম</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          
          <label className="label">ImageURL</label>
          <input name="image" type="url" className="input" placeholder="Image" />

          <label className="label">ইমেইল</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button className="btn text-white bg-red-700 mt-4">সাইন আপ করুন</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
