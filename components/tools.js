

const data = [
    'E',
    'X',
    'A',
    'M',
]


export const Tools = () => {
    return (
        <div className='flex'>
            {data.map((data, index) => {
                return <ToolPoint value={data} key={index} />;
            })}
        </div>
    )
};

const ToolPoint = ({ value }) => {
    return (
        <div className="hover:z-[100] w-6 h-6 hover:w-7 hover:h-7 -ml-1 cursor-pointer bg-blue-500 rounded-full text-center ring ring-white">
            {value}
        </div>
    );
}