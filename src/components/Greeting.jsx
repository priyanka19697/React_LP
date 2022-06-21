import { useParams } from "react-router-dom";

function Greeting() {

    const { username } = useParams();
    const displayName = username ? username : "User"
    let today = new Date();
    let time = today.getHours();
    let time_period;
    if (time >= 0 && time < 12)
        time_period =
            "morning";
    else if (time >= 12 && time < 17)
        time_period =
            "afternoon";
    else
        time_period =
            "evening";
    return (
        <h1>Hello {displayName}, Good {time_period} </h1>
    )
}
export default Greeting;