import logo from "../assets/vedleFooterLogo.svg"

export default function Footer() {
    return (
        <>
            <section className=' w-full  flex flex-row justify-start items-center content-center'>
                <div className="h-10 ml-7 mb-3">
                <img className="" src={logo} alt="Vedle Logo with characters" />
                </div>
                <div className='w-[1px] h-[90px] mx-6 my-2 bg-[#3E0635]' />
                <ul className=" flex flex-col space-y-3 text-[#3E0635] text-xs">
                    <li className="">
                        <a href="#">Sobre</a>
                    </li>
                    <li className="">
                        <a href="#">Time</a>
                    </li>
                    <li className="">
                        <a href="#">Entre em contato</a>
                    </li>
                </ul>
            </section>
        </>
    )
}
