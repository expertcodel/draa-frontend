
export default function FilterList({ filtered }) {
 

    return (
        <div className="relative w-72 mx-auto" style={{position:'absolute'}}>


            {filtered.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded-lg mt-1 shadow-md" style={{listStyle:'none'}}>
                    {filtered.map((item, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"

                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
