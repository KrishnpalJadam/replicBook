// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Demo Book Data (Dynamic Data for now, later replace with props or API data)
// const demoBook = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     progress: 65,
//     day: 15,
//     description: `
//         Rich Dad Poor Dad is Robert Kiyosaki's story of growing up with two dads — 
//         his real father and the father of his best friend, his rich dad — and the ways 
//         in which both men shaped his thoughts about money and investing. 
//         The book explodes the myth that you need to earn a high income to be rich and 
//         explains the difference between working for money and having your money work for you.
//     `,
//     brief: `
// İki baba, ikifarklıhayat: Biri diplomalı ama cebiboş, diğeriokuluyarımbırakmış ama servetiçinde! Robert Kiyosaki, yoksulbabasının “Çokçalış, iyi birişbul” nasihatiniçöpeatıp, zenginbabanın para sırlarınıkeşfediyor. Evinizinbirtuzak, paranınisekölenizolabileceğinisöylesek? Vergilerdenkaçmanın, riskleri alt etmeninvecesaretlefırsatlarıyakalamanınyollarınıöğrenmekistermisiniz? 9 yaşındaçizgiromanlarlabaşlayanbuyolculuk, finansalözgürlüğünkapısınıaralıyor. Zenginlikbankadadeğil, zihninizdesaklı – peki, sizparayahükmetmeyehazırmısınız? Bu özetbirbaşlangıç, ama asılsırlarbukitaptasizibekliyor!
// `,
//     cover: "https://i.ibb.co/6xdB3wp/DIV-1x-1.png",
//     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     // audioUrl: "https://drive.google.com/file/d/1VKChe6IsrulZ5yMxlqkdwY6s9H4ePlZ6/view?usp=sharing",


//     briefUrl: "https://example.com/rich-dad-poor-dad-brief.pdf", // Demo PDF
//     testUrl: "https://forms.google.com/sample-test", // Demo Test Link
//     flipbookIframeSrc: "https://designrr.page?id=454498&token=1363834327&h=9017" // Flipbook URL
// };

// const BookDetails = () => {
//     const [currentModal, setCurrentModal] = useState(null);

//     // Modal Close Handler
//     const closeModal = () => setCurrentModal(null);
//     const [showBriefModal, setShowBriefModal] = useState(false);
//     return (
//         <div className="bg-custom text-white font-['Inter'] container">
//             <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//                 {/* Top Navigation */}
//                 <nav className="flex items-center justify-between mb-12">
//                     <Link to="/Dashboard" className="d-flex align-items-center mb-4 text-decoration-none text-white">
//                         <i className="fa-solid fa-chevron-left me-2" /> Back to Dashboard
//                     </Link>
//                 </nav>

//                 {/* Main Book Section */}
//                 <div className="grid lg:grid-cols-2 gap-12">

//                     {/* Book Cover and Progress */}
//                     <div className="flex flex-col items-center lg:items-start">
//                         <div className="relative w-full max-w-md aspect-[3/4] mb-8">
//                             <img
//                                 src={demoBook.cover}
//                                 alt={demoBook.title}
//                                 className="w-full h-full object-cover rounded-lg shadow-xl"
//                             />
//                         </div>
//                         <h1 className="text-4xl font-bold text-amber-400 mb-4">{demoBook.title}</h1>
//                         <p className="text-xl mb-8">by {demoBook.author}</p>

//                         {/* Progress Bar */}
//                         <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
//                             <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${demoBook.progress}%` }}></div>
//                         </div>
//                         <p className="text-amber-400 mb-8">{demoBook.progress}% Complete</p>
//                     </div>

//                     {/* Right Side - Details and Buttons */}
//                     <div className="space-y-8">

//                         {/* Book Summary */}
//                         <div className="bg-gray-900 rounded-lg p-8 mb-8">
//                             <h2 className="text-2xl font-semibold text-amber-400 mb-4">Book Summary</h2>
//                             <p className="text-gray-300 leading-relaxed">{demoBook.description}</p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <button
//                                 onClick={() => setCurrentModal('audio')}
//                                 className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
//                                 style={{ color: "black" }}
//                             >
//                                 <i className="fas fa-headphones text-2xl"></i>
//                                 <span>Audio Book</span>
//                             </button>

//                             <button
//                                 onClick={() => setCurrentModal('flipbook')}
//                                 className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
//                                 style={{ color: "black" }}
//                             >
//                                 <i className="fas fa-book-open text-2xl"></i>
//                                 <span>Flipbook</span>
//                             </button>

//                             <button
//                                 onClick={() => setShowBriefModal(true)}
//                                 className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
//                                 style={{ color: "black" }}
//                             >
//                                 <i className="fas fa-file-alt text-2xl"></i>
//                                 <span>Brief</span>
//                             </button>
//                             <button
//                                 // onClick={() => window.open(demoBook.testUrl, '_blank')}
//                                 className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
//                                 style={{ color: "black" }}
//                             >
//                                 <i className="fas fa-pencil-alt text-2xl"></i>
//                                 <span>Test Knowledge</span>
//                             </button>
//                         </div>


//                     </div>
//                 </div>
//                 {/* Bootstrap 5 Modal for Brief */}
//                 {showBriefModal && (
//                     <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: '' }}>
//                         <div className="modal-dialog modal-lg">
//                             <div className="modal-content" style={{ background: "black" }}>
//                                 <div className="modal-header">
//                                     <h5 className="modal-title">Brief - {demoBook.title}</h5>
//                                     <button type="button" className="btn-close" style={{ color: "black" }} onClick={() => setShowBriefModal(false)}></button>
//                                 </div>
//                                 <div className="modal-body">
//                                     <p className="text-light" style={{ whiteSpace: 'pre-line' }}>
//                                         {demoBook.brief}
//                                     </p>
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn btn-secondary" onClick={() => setShowBriefModal(false)}>
//                                         Close
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {/* Audio Book Modal */}
//                 {currentModal === 'audio' && (
//                     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
//                         <div className="bg-gray-900 p-6 rounded-lg max-w-lg w-full">
//                             <h3 className="text-xl font-bold text-amber-400 mb-4">Audio Book - {demoBook.title}</h3>
//                             <audio controls className="w-full">
//                                 <source src={demoBook.audioUrl} type="audio/mp3" />
//                                 Your browser does not support the audio element.
//                             </audio>
//                             <button
//                                 onClick={closeModal}
//                                 className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Flipbook Modal */}
//                 {currentModal === 'flipbook' && (
//                     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
//                         <div className="bg-gray-900 p-6 rounded-lg max-w-5xl w-full relative">
//                             <h3 className="text-xl font-bold text-amber-400 mb-4">Flipbook - {demoBook.title}</h3>
//                             <iframe
//                                 src={demoBook.flipbookIframeSrc}
//                                 width="100%"
//                                 height="600"
//                                 style={{ border: 'none' }}
//                                 allowFullScreen
//                             ></iframe>
//                             <button
//                                 onClick={closeModal}
//                                 className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 absolute top-2 right-2"
//                             >
//                                 ✖ Close
//                             </button>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// };

// export default BookDetails;

























import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Demo Book Data (This can be replaced with API data in future)
const demoBook = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    progress: 65,
    day: 15,
    description: `
        Rich Dad Poor Dad is Robert Kiyosaki's story of growing up with two dads — 
        his real father and the father of his best friend, his rich dad — and the ways 
        in which both men shaped his thoughts about money and investing. 
        The book explodes the myth that you need to earn a high income to be rich and 
        explains the difference between working for money and having your money work for you.
    `,
    brief: `
        İki baba, iki farklı hayat: Biri diplomalı ama cebiboş, diğeri okuluyarımbırakmış ama servetiçinde!
        Robert Kiyosaki, yoksul babasının “Çok çalış, iyi bir iş bul” nasihatini çöpeatıp, 
        zengin babanın para sırlarını keşfediyor. 
        Vergilerden kaçmanın, riskleri alt etmenin ve cesaretle fırsatları yakalamanın yollarını öğrenmek ister misiniz?
    `,
    cover: "https://i.ibb.co/6xdB3wp/DIV-1x-1.png",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Replace with actual audiobook URL
    flipbookIframeSrc: "https://designrr.page?id=454498&token=1363834327&h=9017", // Flipbook Embed Link
    testUrl: "https://forms.google.com/sample-test", // Quiz Test Link
};

const BookDetails = () => {
    const [currentModal, setCurrentModal] = useState(null);
    const [showBriefModal, setShowBriefModal] = useState(false);
    const audioRef = useRef(null);

    // Modal Close Handler
    const closeModal = () => {
        setCurrentModal(null);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <div className="bg-custom text-white font-['Inter'] container">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Top Navigation */}
                <nav className="flex items-center justify-between mb-12">
                    <Link to="/Dashboard" className="d-flex align-items-center mb-4 text-decoration-none text-white">
                        <i className="fa-solid fa-chevron-left me-2" /> Back to Dashboard
                    </Link>
                </nav>

                {/* Main Book Section */}
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Clickable Book Cover */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="relative w-full max-w-md aspect-[3/4] mb-8">
                            <img
                                src={demoBook.cover}
                                alt={demoBook.title}
                                className="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer"
                                onClick={() => setCurrentModal('flipbook')}
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-amber-400 mb-4">{demoBook.title}</h1>
                        <p className="text-xl mb-8">by {demoBook.author}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                            <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${demoBook.progress}%` }}></div>
                        </div>
                        <p className="text-amber-400 mb-8">{demoBook.progress}% Complete</p>
                    </div>

                    {/* Right Side - Details and Buttons */}
                    <div className="space-y-8">

                        {/* Book Summary */}
                        <div className="bg-gray-900 rounded-lg p-8 mb-8">
                            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Book Summary</h2>
                            <p className="text-gray-300 leading-relaxed">{demoBook.description}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button
                                onClick={() => setCurrentModal('flipbook')}
                                className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
                                style={{ color: "black" }}
                            >
                                <i className="fas fa-book-open text-2xl"></i>
                                <span>Read & Listen</span>
                            </button>

                            <button
                                onClick={() => setShowBriefModal(true)}
                                className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
                                style={{ color: "black" }}
                            >
                                <i className="fas fa-file-alt text-2xl"></i>
                                <span>Brief</span>
                            </button>

                            <button
                                onClick={() => window.open(demoBook.testUrl, '_blank')}
                                className="!rounded-button flex items-center justify-center space-x-3 bg-amber-400 text-custom py-4 px-6 text-lg font-semibold hover:bg-amber-500 transition-colors"
                                style={{ color: "black" }}
                            >
                                <i className="fas fa-pencil-alt text-2xl"></i>
                                <span>Test Knowledge</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Brief Modal */}
                {showBriefModal && (
                    <div className="modal fade show d-block">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content bg-black">
                                <div className="modal-header">
                                    <h5 className="modal-title text-amber-400">Brief - {demoBook.title}</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowBriefModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <p className="text-light">{demoBook.brief}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowBriefModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Flipbook + Audiobook Modal */}
                {currentModal === 'flipbook' && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                        <div className="bg-gray-900 p-6 rounded-lg max-w-5xl w-full relative">
                            <h3 className="text-xl font-bold text-amber-400 mb-4">Flipbook & Audio - {demoBook.title}</h3>
                            <iframe
                                src={demoBook.flipbookIframeSrc}
                                width="100%"
                                height="500"
                                className="rounded-lg"
                                style={{ border: 'none' }}
                                allowFullScreen
                            ></iframe>
                            <audio ref={audioRef} controls className="w-full mt-4" controlsList="nodownload">
                                <source src={demoBook.audioUrl} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                ✖ Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookDetails;








