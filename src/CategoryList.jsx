
const CategoryList = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-20 ">Job Category List</h2>
            <p className="w-3/5 m-auto text-center mt-8 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores!</p>
            <div className="flex  justify-evenly mb-20 ">
                <div className="bg-[#DCF2F1] p-8 rounded-xl">
                    <img src="/public/assets/icons/accounts.png" alt="" />
                    <p className="mt-4 font-medium">Account & Finance</p>
                    <p>300 job available.</p>
                </div>
                <div className="bg-[#DCF2F1] p-8 rounded-xl">
                    <img src="/public/assets/icons/creative.png" alt="" />
                    <p className="mt-4 font-medium">Creative Design</p>
                    <p>100+ job available.</p>
                </div>
                <div className="bg-[#DCF2F1] p-8 rounded-xl">
                    <img src="/public/assets/icons/marketing.png" alt="" />
                    <p className="mt-4 font-medium">Marketing &Sales</p>
                    <p>20 job available.</p>
                </div>
                <div className="bg-[#DCF2F1] p-8 rounded-xl">
                    <img src="/public/assets/icons/chip.png" alt="" />
                    <p className="mt-4 font-medium">Enginnering Job</p>
                    <p>300 job available.</p>
                </div>
                
            </div>
        </div>
    );
};

export default CategoryList;