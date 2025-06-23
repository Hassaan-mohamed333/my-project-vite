
export default function Footer() {
    return <>
        <footer className="bg-[#2c3e50] dark:bg-gray-900 relative py-20 w-100%">
            <div className="mx-auto w-full max-w-screen-xl mb-20 md:mb-10">
                <div className="grid grid-cols-1 gap-8 px-10 py-6 lg:py-8 md:grid-cols-3 text-white">
                    <div className='text-center'>
                        <h2 className="mb-6 text-2xl font-semibold text-white uppercase dark:text-white">Location</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <h3 className='mb-3 text-white'>2215 John Daniel Drive</h3>
                            <h4 className='text-white'>Clark, MO 65243</h4>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 className="mb-6 text-2xl font-semibold text-white uppercase dark:text-white">Around the web</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium flex justify-center items-center gap-4">
                            <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white">
                                <i className='fa-brands fa-facebook'></i>
                            </div>
                            <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white">
                                <i className='fa-brands fa-twitter'></i>
                            </div>
                            <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white">
                                <i className='fa-brands fa-linkedin-in'></i>
                            </div>
                            <div className="w-10 h-10 border-2 border-white rounded-full flex justify-center items-center text-white">
                                <i className='fa-solid fa-globe'></i>
                            </div>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 className="mb-6 text-2xl font-semibold text-white uppercase dark:text-white">About Freelancer</h2>
                        <ul className="text-white dark:text-gray-400 font-medium">
                            <li>
                                Freelance is a free to use, licensed Bootstrap theme created by Hassaan Mohamed
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 bg-[#1a252f] dark:bg-gray-700 text-center absolute bottom-0 left-0 right-0">
                <span className="text-sm text-white dark:text-gray-300 sm:text-center">Copyright © Route 2025
                </span>
            </div>
        </footer>
    </>

}
