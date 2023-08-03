import { useEffect, useState, useContext } from "react";
import Statscard from "./Stats-card";
import { UserContext } from "../context/Usercontext";



function Profile() {
    const [userData, setState] = useState({});

    const { userInput } = useContext(UserContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Don't call if the input is empty

        if (!userInput) return;

        fetch(`https://api.github.com/users/${userInput}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("User not Found");
                }
                return response.json()
            })
            .then(userData => {
                setState(userData);
                setError(null) //Clear any previous erros before u can log another data.
            })
            .catch((error) => {
                setError(error.message)
            });


    }, [userInput]);

    return (
        <div className="profile-card">
            {error && <p className="text-center text-red-500">{error}</p>}
            {userData && Object.keys(userData).length > 0 ? (
                <>
                    <div>
                        <img className="ring-4 ring-blue-500 rounded-full h-24" src={userData.avatar_url} alt="Github Profile Picture" />
                    </div>

                    <div className="text-center m-3">
                        <h1 className="text-white font-bold text-2xl">{userData.name}</h1>
                        <p className="text-blue-500"> <a className="hover:underline" href={userData.html_url} target="_blank" rel="noopener noreferrer"> @{userData.login}</a> </p>
                    </div>


                    <div className="details">
                        <p className="text-gray-400"><i class="fa-solid fa-building"></i> {userData.company}</p>
                        <p className="text-gray-400"><i class="fa-solid fa-location-dot"></i> {userData.location}</p>
                        <p className="text-gray-400"><i class="fa-solid fa-calendar-days"></i> {new Date(userData.created_at).toDateString()}</p>
                    </div>


                    <div className="stats-card">
                        <Statscard number={userData.followers} title="Followers" />
                        <Statscard number={userData.public_repos} title="Repostitories" />
                        <Statscard number={userData.following} title="Following" />
                    </div>
                </>
            ) : null}

        </div>
    )

}

export default Profile;