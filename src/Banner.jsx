
const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="">
                    <p className="text-6xl font-bold mt-12">One Step <br /> Closer To Your <br /> <span className="text-sky-400">Dream Job</span></p>
                    <p className="mt-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe impedit incidunt modi, pariatur quasi delectus laudantium officia rerum nostrum ullam veniam rem totam quia quidem fugit aut assumenda alias nesciunt!</p>
                    <button className="btn btn-primary mt-10">Get Started</button>
                </div>

                <div>
                        <img src="/public/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;