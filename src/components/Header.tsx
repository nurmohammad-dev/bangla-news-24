import Image from "next/image";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="border-t-4 border-purple-900">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                
                <div className="flex items-center gap-2">
                    <Image
                        className="w-10 h-10"
                        height={50}
                        width={50}
                        src="/logo.webp"
                        alt="Logo"
                    />

                    <div>
                        <h1 className="text-2xl font-bold">
                            Bangla News 24
                        </h1>
                        <p className="text-sm">{date}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="btn">
                        সাইন ইন
                    </button>

                    <button className="btn bg-red-800 text-white">
                        সাইন আপ
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;