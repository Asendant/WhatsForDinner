const FoodCard = () => {
    return (
        <div className="w-[80vw] lg:w-1/4 h-[80vh] bg-white shadow-xl m-auto rounded-xl mt-10 relative flex flex-col items-center pt-3 px-4">
        {/* Image Placeholder */}
        <div className="w-[95%] h-1/2 bg-gray-200 rounded-xl mb-4" />

        <div className="w-[95%]">
            <div className="">
                {/* Food Name */}
                <h2 className="font-semibold text-2xl text-gray-800 tracking-wide">
                    Food Name
                </h2>

                {/* Difficulty */}
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Difficulty
                </h3>
                <table className="border-collapse border-2 border-black w-full">
                    <thead>
                        <tr className="text-lg font-semibold text-gray-700 bg-red-300">
                            <td className="border-2 border-black p-2">Ingrediants</td>
                            <td className="border-2 border-black p-2">Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-2 border-black p-2">
                                Ingrediant 1
                            </td>
                            <td className="border-2 border-black p-2">
                                Amount 1
                            </td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black p-2">
                                Ingrediant 2
                            </td>
                            <td className="border-2 border-black p-2">
                                Amount 2
                            </td>
                        </tr>
                        <tr>
                            <td className="border-2 border-black p-2">
                                Ingrediant 3
                            </td>
                            <td className="border-2 border-black p-2">
                                Amount 3
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex flex-col items-center">
                    <button className="w-48 text-white bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-500 rounded-md py-1 my-2">View Full Recipe</button>
                    <button className="w-48 border-violet-500 border-2 rounded-md py-1">Save Recipe For Later</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FoodCard;