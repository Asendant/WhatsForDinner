const FoodCard = () => {
    return (
        <div className="w-[80vw] lg:w-1/4 h-[80vh] bg-white m-auto rounded-xl mt-10 relative flex flex-col pt-3 px-1">
            <div className="w-[95%] h-1/2 bg-gray-200 rounded-xl mx-auto" />
            <div className="ml-3">
                <h2 className="font-bold text-3xl">Food Name</h2>
                <h3 className="font-bold italic text-xl">Difficulty</h3>
                <ul>
                    <li>Ingrediant 1</li>
                    <li>Ingrediant 2</li>
                    <li>Ingrediant 3</li>
                    <li>Ingrediant 4</li>
                </ul>
            </div>
        </div>
    )
}

export default FoodCard;