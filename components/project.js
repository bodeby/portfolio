import { Tools } from "./tools"

export const Project = ({data}) => {

    const source = 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80';
    
    return (
        <div className="overflow-hidden rounded-sm h-90 w-full cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={source} className="max-h-40 w-full object-cover" />
                <div className="flex justify-between w-full px-2 py-4">
                    <p className="text-gray-800 text-lg font-medium">
                        {data}
                    </p>
                    <Tools/>
                </div>
            </a>
        </div>
    )
}
