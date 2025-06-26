import { useState, useEffect } from 'react';
import img1 from '../../assets/Images/port1.png'
import img2 from '../../assets/Images/port2.png'
import img3 from '../../assets/Images/port3.png'

export default function Portfolio() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const [imgs, setImgs] = useState([
        { img: img1, id: "1" },
        { img: img2, id: "2"},
        { img: img3, id: "3" },
        { img: img1, id: "4" },
        { img: img2, id: "5" },
        { img: img3, id: "6" }
    ]);

    const handleImgClick = (img, index) => {
        setIsLoading(true);
        setSelectedImg(img);
        setSelectedIndex(index);
        setModalVisible(true);
        document.body.style.overflow = 'hidden';
        
      
        setTimeout(() => setIsLoading(false), 300);
    }

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        document.body.style.overflow = 'unset';
        setIsLoading(false);
    };

   
    const nextImage = () => {
        const nextIndex = (selectedIndex + 1) % imgs.length;
        setSelectedIndex(nextIndex);
        setSelectedImg(imgs[nextIndex].img);
    };

    const prevImage = () => {
        const prevIndex = selectedIndex === 0 ? imgs.length - 1 : selectedIndex - 1;
        setSelectedIndex(prevIndex);
        setSelectedImg(imgs[prevIndex].img);
    };

    // التحكم بالكيبورد
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!modalVisible) return;
            
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [modalVisible, selectedIndex]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-16">
                       
                     
                    </div>

                    {/* Grid متجاوب ومحسن للصور */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {imgs.map((item, index) => {
                            return (
                                <div key={item.id} className="group">
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                                        {/* الصورة */}
                                        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                            <img 
                                                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                                                src={item.img} 
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        
                                      
                                        {/* Layer التفاعلي */}
                                        <div 
                                            onClick={() => handleImgClick(item.img, index)} 
                                            className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center cursor-pointer"
                                        >
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <i className="fa-solid fa-search-plus text-white text-2xl sm:text-3xl mb-3 drop-shadow-lg"></i>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Modal محسن مع ميزات متقدمة */}
            <div className={`${modalVisible ? "flex" : "hidden"} fixed inset-0 bg-black bg-opacity-90 z-50 p-4`}>
                <div 
                    onClick={handleModalClick} 
                    className="flex justify-center items-center w-full h-full"
                >
                    <div className="relative max-w-full max-h-full">
                        {/* أزرار التحكم */}
                        <div className="absolute -top-16 left-0 right-0 flex justify-between items-center text-white">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <span className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                                    {selectedIndex + 1} من {imgs.length}
                                </span>
                            </div>
                            <button
                                onClick={closeModal}
                                className="hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                                aria-label="إغلاق"
                            >
                                <i className="fa-solid fa-times text-xl"></i>
                            </button>
                        </div>
                        
                        {/* أزرار التنقل */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
                            aria-label="الصورة السابقة"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
                            aria-label="الصورة التالية"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        
                        {/* الصورة في Modal */}
                        <div className="relative">
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                </div>
                            )}
                            <img 
                                src={selectedImg} 
                                className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl" 
                                alt={imgs[selectedIndex]?.title}
                                style={{ maxHeight: 'calc(100vh - 150px)', maxWidth: 'calc(100vw - 100px)' }}
                            />
                        </div>
                        
                        {/* معلومات الصورة */}
                        <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
                            <h3 className="text-lg font-semibold mb-1">{imgs[selectedIndex]?.title}</h3>
                            <p className="text-sm text-gray-300">{imgs[selectedIndex]?.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

