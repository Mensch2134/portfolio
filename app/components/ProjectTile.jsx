export default function ProjectTile() {
    return (
        <div className="p-4 bg-[#222022] rounded-sm scale-100 hover:scale-102 ease-in-out duration-200 cursor-pointer">
            <img
                className="w-full h-[120px] object-cover rounded-md"
                src="https://via.placeholder.com/150x120"
                alt="Placeholder"
            />
            <h3 className="text-lg font-semibold mt-2">Card Title</h3>
            <p className="text-sm text-gray-600">This is a short paragraph to describe the content. And i am writing even more to test how this affects the grid.</p>
        </div>
    )
}