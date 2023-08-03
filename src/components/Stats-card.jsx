function Statscard(prop){
    return(
        <div className="text-center  bg-neutral-800 mt-6 rounded p-4">
            <p className="text-white text-2xl font-bold" >{prop.number}</p>
            <p className="text-gray-400">{prop.title}</p>
        </div>
    )
}

export default Statscard;