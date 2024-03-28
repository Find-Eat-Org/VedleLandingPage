type teamCardProps = {
    photo: string;
    name: string;
    position: string;
}

export default function TeamCard(props: teamCardProps) {
    const { photo, name, position } = props
    return (
        <div className="aspect-square h-[220px] m-4 flex flex-col justify-center text-center">
            <div className="h-[120px] w-[3/5] border border-red">
                <img className="object-fit h-full" src={photo} alt={"Photo of " + name + ", member."} />
            </div>
            <p className="text-xl text-white w-full">{name}</p>
            <p className="text-lg text-white text-highlight italic">
                {position}
            </p>
        </div>
    )
}
