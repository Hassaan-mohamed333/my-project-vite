
export default function About() {

    
    return <>

        <section className="bg-[#17af91] h-screen flex items-center justify-center flex-col gap-10 text-white w-screen">
            <div className="flex flex-col gap-10">
                <img src="../../assets/Images/avatar.svg" alt="" />
                <h1 className='font-bold text-3xl'>ABOUT COMPONENT</h1>
                <div className='flex items-center justify-center gap-3 text-white'>
                    <p className=' w-24 h-1 bg-white'></p>
                    <i className='fa-solid fa-star'></i>
                    <p className=' w-24 h-1 bg-white'></p>
                </div>
            </div>
            <div className="container flex gap-10 px-10">
                <p className="p1">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="p2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </section>
    </>
}
