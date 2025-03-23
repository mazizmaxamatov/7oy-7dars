import { ShinyButton } from "@/components/magicui/shiny-button";


export default function Header() {

  return (
    <>

      <header className=" max-w-[1440px] mx-auto border-4 bg-[#000000]">
        <div className="container">
          <nav className="flex justify-between mt-[37px] mb-[26px]">
            <div className="logo">
              <p></p>
            </div>
            <ul className="flex gap-[30px] mt-[10px] ">
              <li><a className="text-[#666666] hover:text-[#ffffff]" href="">Home</a></li>
              <li><a className="text-[#666666] hover:text-[#ffffff]" href="">Features</a></li>
              <li><a className="text-[#666666] hover:text-[#ffffff]" href="">Testimonial</a></li>
              <li><a className="text-[#666666] hover:text-[#ffffff]" href="">FAQ</a></li>
            </ul>
            <div className="right flex gap-[30px]">
              <div className="">
                <p className="text-[#ffffff] mt-[8px] ">Log in</p>
              </div>
              <ShinyButton className="bg-[green] pt-[7px]">Shiny Button</ShinyButton>;
            </div>
          </nav>
          <main className="flex justify-between mt-[120px] mb-[100px]">
            <div className="main_left">
              <button className="p-[7px] rounded-xl bg-[#000000] text-[green] mt-[60px]">Decentralised</button>
              <h1 className="max-w-[650px] text-[#ffffff] font-bold text-[70px] mt-[30px]">Revolutionizing Web3 Finance</h1>
              <p className="max-w-[583px] text-[#666666] font-bold text-[19px] mt-[30px]">Secure, scalable, and decentralized solutions for your digital assets—experience the future of financial freedom.</p>
              <div className="btn mt-[35px]">
                <ShinyButton className="btn1 bg-[green] p-[12px] ">Get Started</ShinyButton>;
                <ShinyButton className="btn2 bg-[green] p-[12px] ">Watch video</ShinyButton>;
              </div>
            </div>
            <div className="main_right">
              <p></p>
            </div>
          </main>
        </div>
      </header>
      
   
          
        
      

    </>
  );

}



