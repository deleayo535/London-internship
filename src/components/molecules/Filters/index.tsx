import { DownOutlined } from "@ant-design/icons";
import user from '../../../images/File_Document.svg'


function Filter () {
    return (
        <div className="w-[100%] bg-[white] rounded-lg h-[] mt-8 cursor-pointer">
            <div className="flex justify-between justify-center items-center p-4">
                <p className="text-sm font-bold">Filters</p>
                <p className="text-sm">0 selected</p>
            </div>
            <div className="flex hover:bg-[#E9EFFF] justify-between justify-center items-center p-4">
                <p className="flex text-sm gap-2 font-semibold">
            <img className="w-[26px] h-[26px] rounded-full" src={user} alt=""/>

                    Personal Information</p>
                <p className=""><DownOutlined style={{ fontSize: '14px' }}/></p>
            </div>
            <div className="flex hover:bg-[#E9EFFF] justify-between justify-center items-center p-4">
                <p className="flex text-sm gap-2 font-semibold">
            <img className="w-[26px] h-[26px] rounded-full" src={user} alt=""/>
                    Education</p>
                <p className=""><DownOutlined style={{ fontSize: '14px', marginTop: '' }}/></p>
            </div>
            <div className="flex hover:bg-[#E9EFFF] justify-between justify-center items-center p-4">
                <p className="flex text-sm gap-2 font-semibold">
            <img className="w-[26px] h-[26px] rounded-full" src={user} alt=""/>
                    Work Experience</p>
                <p className=""><DownOutlined style={{ fontSize: '14px', marginTop: '' }}/></p>
            </div>
            <div className="flex hover:bg-[#E9EFFF] justify-between justify-center items-center p-4">
                <p className="flex text-sm gap-2 font-semibold">
            <img className="w-[26px] h-[26px] rounded-full" src={user} alt=""/>
                    Activity Filter</p>
                <p className=""><DownOutlined style={{ fontSize: '14px', marginTop: '' }}/></p>
            </div>
            <div className="flex hover:bg-[#E9EFFF] justify-between justify-center items-center p-4">
                <p className="flex text-sm gap-2 font-semibold">
                <img className="w-[26px] h-[26px] rounded-full" src={user} alt=""/>
                    Advanced Filter</p>
                <p className=""><DownOutlined style={{ fontSize: '12px', marginTop: '' }}/></p>
            </div>
        </div>
    )
}

export default Filter;