import heroimg from "../assets/Hero.png"
import Navbar from './Navbar'

export default function Hero() {
    return (
        <>
            <section>
                <div className="flex flex-col relative">
                    <div className="absolute w-full top-14">
                        <Navbar />
                    </div>
                    <img src={heroimg} alt="Hero Image"
                        className='w-full aspect-[258/100] object-cover'
                    />
                </div>
            </section>
        </>
    )
}
