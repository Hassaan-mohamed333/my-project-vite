import avatar from '../../assets/Images/avatar.svg';



export default function Home() {
    return <>

        <section className='bg-green-500 text-white'>
            <div className="justify-center items-center h-screen flex flex-col gap-5">
                <img src={avatar} alt="" width={250} />
                <h1 className=' text-4xl uppercase font-bold '>Start framework</h1>
                <div className='flex items-center justify-center gap-3'>
                    <p className=' w-24 h-1 bg-white'></p>
                    <i className='fa-solid fa-star'></i>
                    <p className=' w-24 h-1 bg-white'></p>
                </div>
                <h3>Graphic Artist - Web Designer - Illustrator</h3>
            </div>
        </section>

    </>
}
