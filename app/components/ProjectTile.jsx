import Link from "next/link"

export default function ProjectTile({ title, description, thumbnail, slug }) {

    return (
        <Link href={"/projects/" + slug.current} className="p-4 bg-[#1d1b1d] rounded-sm scale-100 hover:scale-102 ease-in-out duration-200 cursor-pointer">
            <div>
                <img
                    className="w-[120px] h-[120px] object-cover rounded-md"
                    src={thumbnail || "https://via.placeholder.com/150x120"}
                    alt="Placeholder"
                />
                <h3 className="text-2xl text-[#cd6688] font-semibold my-2">{title}</h3>
                <div className="text-md text-gray-300">{description}</div>
            </div>
        </Link>
    )
}