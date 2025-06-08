import { useState } from 'react';
import img1 from '../../assets/Images/port1.png'
import img2 from '../../assets/Images/port2.png'
import img3 from '../../assets/Images/port3.png'

export default function Portfolio() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    const [imgs, setImgs] = useState([
        { img: img1, id: "1" },
        { img: img2, id: "2" },
        { img: img3, id: "3" },
        { img: img1, id: "4" },
        { img: img2, id: "5" },
        { img: img3, id: "6" }])


    const handleImgClick = (img) => {
        setSelectedImg(img)
        setModalVisible(true)
    }

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false)
        }
    };


    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="w-3/4 mx-auto flex flex-wrap pt-20">
                    {imgs.map((img) => {
                        return (
                            <div key={img.id} className='w-1/3 mainImg'>
                                <div className="inner m-5 relative">
                                    <img className='rounded-xl' src={img.img} alt="" />
                                    <div onClick={() => handleImgClick(img.img)} className='layer rounded-xl top-0 bottom-0 w-full absolute bg-blue-400 group bg-opacity-0 hover:bg-opacity-90 duration-300 flex justify-center items-center cursor-pointer '>
                                        <i className='fa-solid fa-plus !hidden group-hover:!block text-blue-300 text-6xl'></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* {modalVisible ?  : ""} */}

                <div className={`${modalVisible ? "block" : "hidden"} modal fixed top-0 bottom-0 right-0 left-0 bg-blue-300 bg-opacity-20 `}>
                    <div onClick={handleModalClick} className='flex justify-center items-center h-screen'>
                        <img src={selectedImg} className=' cursor-pointer rounded-xl' width={600} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

