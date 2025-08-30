import Image from "next/image";

export default function LoadingState() {
    return (
        <div className="flex items-center justify-center gap-2 flex-col w-full h-screen ">
            <Image src='/loading-peep.png' width={300} height={250} alt="loading placeholder"/>
            <h2 className="font-medium text-2xl">Loading...</h2>
        </div>
    )
}