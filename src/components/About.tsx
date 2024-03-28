import rec1 from "../assets/Rectangle 1.svg"
import rec2 from "../assets/Rectangle 2.svg"
import rec3 from "../assets/Rectangle 3.svg"
import layers from "../assets/layers-three-02.svg"
import puzzle from "../assets/puzzle-piece-01.svg"
import target from "../assets/target-04.svg"


export default function About() {
    return (
        <section className='mt-8 aspect-[3/1] w-full flex flex-col  items-center '>
            <h2 className='text-4xl'>
                <span className='font-highlight italic'> Sobre{' '}</span>
                a Vedle
            </h2>
            <div className='flex flex-row'>
                <div className='m-6 flex flex-col justify-around font-body'>

                    <div className="relative">
                        <img src={rec1} alt="" />
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
                            <div>{"Objetivos"}</div>
                            <div>{"Compartilhados"}</div>
                        </div>
                    </div>
                    <div className="relative min-w-[196px]">
                        <img src={rec2} alt="" />
                        <div className="w-[60%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                            {"Criatividade Ágil"}
                        </div>
                    </div>
                    <div className="relative">
                        <img src={rec3} alt="" />
                        <div className="absolute top-1/2 left-[40%] translate-x-[-50%] translate-y-[-50%] flex flex-col ">
                            <div>{"Guiar por"}</div>
                            <div>{"Excelência"}</div>
                        </div>
                    </div>

                </div>
                <div className='w-1 h-[440px] m-6 bg-[#3E0635]' />
                <div className='m-6 flex flex-col justify-around font-body'>

                    <div className="relative">
                        <img src={target} alt="" />

                    </div>
                    <div className="relative min-w-[196px]">
                        <img src={puzzle} alt="" />

                    </div>
                    <div className="relative">
                        <img src={layers} alt="" />

                    </div>

                </div>
            </div>
        </section>
    )
}
