import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen text-4xl text-center font-extrabold flex flex-col items-center justify-center">
            <h2>Oppssssss!!!</h2>
            <Link to='/'><button className="btn btn-primary mt-5">Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;