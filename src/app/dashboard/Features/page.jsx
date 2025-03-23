import Link from "next/link";

export default function Features() {
    return (
        <div>
            <div className="featuris max-w-[1440px] mx-auto bg-[#000000]">
                <div className="container">
                    <div className="centr max-w-[644px] mx-auto text-center">
                        <h4 className="font-bold text-[22px] text-[green] mt-[50px]">Features</h4>
                        <h1 className="font-bold text-[50px] mt-[20px] text-[#ffffff]">Future Breakdown</h1>
                        <p className="text-[#666666] text-[22px] font-bold mt-[22px]">Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.</p>
                    </div>
                    <div className="carrds flex justify-between mt-[100px] mb-[100px]">
                        <div className="card w-[430px] h-[264px] border-2 rounded-lg text-center">
                            <p></p>
                            <h5 className="text-[#ffffff] mt-[120px] font-bold text-[18px] mb-[20px]">Scalability</h5>
                            <span className="text-[#666666] font-bold text-[18px] ">Adapt and grow, no matter the demand on grow</span>
                        </div>
                        <div className="card1 w-[430px] h-[264px] border-2 rounded-lg text-center">
                            <p></p>
                            <h5 className="text-[#ffffff] mt-[120px] font-bold text-[18px] mb-[20px]">Decentralisation</h5>
                            <span className="text-[#666666] font-bold text-[18px] ">Decentralization. Web3 aims to move away from the centralized</span>
                        </div>
                        <div className="card2 w-[430px] h-[264px] border-2 rounded-lg text-center">
                            <p></p>
                            <h5 className="text-[#ffffff] mt-[120px] font-bold text-[18px] mb-[20px]">Connectivity</h5>
                            <span className="text-[#666666] font-bold text-[18px] ">computers will be able to understand information similarly to humans</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}