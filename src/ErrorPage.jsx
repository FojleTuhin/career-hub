import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen text-4xl text-center font-extrabold flex flex-col items-center justify-center">
            <h2>Oppssssss!!!</h2>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;