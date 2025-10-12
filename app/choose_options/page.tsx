import React from 'react'
import ElectricBorder from '../_components/react-bits/electricBorder'
import { FileText } from 'lucide-react';

const ChooseOptionsPage = () => {
  return (
    <>
    {/* navbar */}
    <div className='flex flex-row justify-between shadow-md p-7 gap-6 border-b border-zinc-800 rounded-lg'> 
        <div className=''>
            Home
        </div>
        <div className='flex flex-row gap-4 '>
            <div>Templates</div>
            <div>CV-Maker</div>
            <div>About</div>
        </div>
        <div className='flex flex-row gap-4'>
            <div className='rounded-2xl border border-purple-600 py-1 px-4'>Login</div>
            <div className='rounded-2xl border border-gray-400 py-1 px-4'>Sign up</div>

        </div>           
    </div>
    
    <div className='min-h-screen bg-black text-white'>

        {/* content */}
        <div className='flex flex-col justify-center items-center h-screen gap-6'>
            <div className='flex flex-row gap-3 '>
                <h1 className='font-bold text-5xl text-purple-700'>How</h1>
                <h1 className='font-bold text-5xl'>would you like to start?</h1>
            </div>
            <div className='flex flex-row gap-2'> 
                <p className='text-lg'>Choose your preferred method to begin building your</p>
                <p className='text-lg text-purple-600'>professional</p>
                <p className='text-lg'>resume</p>
            </div>
            <div className='flex flex-row gap-8'>
                <ElectricBorder
                    color="#7D2ECC"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                    <div className='flex flex-col p-5 gap-8 text-center'>
                        <FileText className='mx-auto w-full' size={64} color="#7D2ECC"/>
                        <h2 className='font-semibold text-2xl '>Start from Scratch</h2>
                        <p className="text-md text-center">
                            Build your resume from the ground up <br />
                            using our intuitive editor and<br />
                            pre-designed sections.
                        </p>
                        <button className='bg-purple-600 text-white rounded-md p-2'>Start Now</button>
                    </div>
                </ElectricBorder>
                <ElectricBorder
                    color="#7D2ECC"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                    <div className='flex flex-col p-5 gap-8 text-center'>
                        <FileText className='mx-auto w-full' size={64} color="#7D2ECC"/>
                        <h2 className='font-semibold text-2xl '>Start from Scratch</h2>
                        <p className="text-md text-center">
                            Build your resume from the ground up <br />
                            using our intuitive editor and<br />
                            pre-designed sections.
                        </p>
                        <button className='bg-purple-600 text-white rounded-md p-2'>Start Now</button>
                    </div>
                </ElectricBorder>
                <ElectricBorder
                    color="#7D2ECC"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    >
                    <div className='flex flex-col p-5 gap-8 text-center'>
                        <FileText className='mx-auto w-full' size={64} color="#7D2ECC"/>
                        <h2 className='font-semibold text-2xl '>Start from Scratch</h2>
                        <p className="text-md text-center">
                            Build your resume from the ground up <br />
                            using our intuitive editor and<br />
                            pre-designed sections.
                        </p>
                        <button className='bg-purple-600 text-white rounded-md p-2'>Start Now</button>
                    </div>
                </ElectricBorder>
            </div>
            {/* <div className='bg-black p-6'></div>
            <div className='bg-black p-6'></div> */}

        </div>


    </div>
    </>
  )
}

export default ChooseOptionsPage