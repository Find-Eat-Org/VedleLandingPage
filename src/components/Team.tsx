import TeamCard from "./TeamCard";
import personIcon from "../assets/person.svg"

export default function Team() {
    return (
        <>
            <section className='aspect-[295/100] w-full h-96 bg-[#3E0635] flex flex-col items-center content-center justify-around'>

                <div className="text-3xl mt-8 font-highlight italic text-[#F4EFE6]">
                    Time
                </div>
                <div className="flex min-h-[1/3]">
                    <TeamCard photo={personIcon} name={"Victória Cordeiro Simão"} position={"Chief Financial Officer"} />
                    <TeamCard photo={personIcon} name={"Leonh Matheus"} position={"Chief Executive Officer"} />
                    <TeamCard photo={personIcon} name={"Lucas Cordeiro Simão"} position={"Chief Technology Officer"} />
                </div>
            </section>
        </>
    )
}
