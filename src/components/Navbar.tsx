
export default function Navbar() {
    return (
        <nav className="flex" >
            <div className='w-[70%] mx-auto text-lg font-sans'>
                <div className="flex justify-between">
                    <ul className="flex w-[35%] justify-between">
                        <li className="">
                            <a href="#">Sobre</a>
                        </li>
                        <li className="">
                            <a href="#">Time</a>
                        </li>
                        <li className="">
                            <a href="#">Produtos</a>
                        </li>
                    </ul>

                </div>

            </div>

            <button className="text-white text-center w-[90px] h-[37px] rounded-3xl bg-[#5B2952] hover:bg-[#8a3a7c]">
                Contato
            </button>
        </nav>
    )
}
