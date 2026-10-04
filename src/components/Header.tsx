import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative w-full border-t-2 border-purple-900 py-4">
      
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/logo.webp"
          alt="Bangla News 24"
          width={40}
          height={40}
          priority
        />

        <div>
          <h1 className="text-2xl font-bold text-red-700">
            Bangla News 24
          </h1>

          <p className="text-xs text-neutral-500">
            {date}
          </p>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="absolute right-10 top-4 flex items-center gap-3">
        <button className="btn btn-ghost text-neutral-700 hover:text-red-700">
          সাইন ইন
        </button>

        <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white hover:bg-red-800">
          সাইন আপ
        </button>
      </div>

      <NavLinks/>

    </header>
  );
};

export default Header;