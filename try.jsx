// import React, { useRef, useState } from 'react';

// function Nomer3() {

//     const scrollContainerRef = useRef(null);
//     const [isScrollAtStart, setIsScrollAtStart] = useState(true);
//     const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

//     const handleScroll = () => {
//         const container = scrollContainerRef.current;
//         setIsScrollAtStart(container.scrollLeft === 0);
//         setIsScrollAtEnd(
//             container.scrollLeft + container.offsetWidth >= container.scrollWidth
//         );
//     };

//     const scrollTo = (scrollOffset) => {
//         const container = scrollContainerRef.current;
//         container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
//     };

//     const scrollToNext = () => {
//         scrollTo(scrollContainerRef.current.offsetWidth);
//     };

//     const scrollToPrevious = () => {
//         scrollTo(-scrollContainerRef.current.offsetWidth);
//     };

//     return (
//         <>
//             <div className="w-full h-[430px] bg-blue500 relative">
//                 <h3 className="inline-block text-black ml-[46px] mt-[18px]">Kategori Pelatihan</h3>
//                 <p className="flex justify-start text-black ml-[46px] mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis. </p>
//                 <div
//                     className="flex overflow-x-scroll hide-scroll-bar"
//                     ref={scrollContainerRef}
//                     onScroll={handleScroll}
//                 >
//                     <div className="flex flex-nowrap ml-[46px] mt-[27px]">
//                         <div className="pr-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className=" px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className=" =px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Buttons aligned with content */}
//                 {!isScrollAtStart && (
//                     <button
//                         className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[165px] left-0 mt-[64px]"
//                         onClick={scrollToPrevious}
//                     >
//                         <div className='grid grid-cols-1'>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="place-self-center w-6 h-6"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M15.75 19.5L8.25 12l7.5-7.5"
//                                 />
//                             </svg>
//                         </div>
//                     </button>
//                 )}
//                 {!isScrollAtEnd && (
//                     <button
//                         className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[165px] right-0 mt-[64px]"
//                         onClick={scrollToNext}
//                     >
//                         <div className='grid grid-cols-1'>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="place-self-center w-6 h-6"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                                 />
//                             </svg>
//                         </div>
//                     </button>
//                 )}

//             </div>
//         </>
//     )
// }

// export default Nomer3


// import React, { useRef, useState } from 'react';

// function Nomer3() {
//     const scrollContainerRef = useRef(null);
//     const [isScrollAtStart, setIsScrollAtStart] = useState(true);
//     const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

//     const handleScroll = () => {
//         const container = scrollContainerRef.current;
//         setIsScrollAtStart(container.scrollLeft === 0);
//         setIsScrollAtEnd(
//             container.scrollLeft + container.offsetWidth >= container.scrollWidth
//         );
//     };

//     const scrollTo = (scrollOffset) => {
//         const container = scrollContainerRef.current;
//         container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
//     };

//     const scrollToNext = () => {
//         const container = scrollContainerRef.current;
//         if (!isScrollAtEnd) {
//             scrollTo(container.offsetWidth);
//         }
//     };

//     const scrollToPrevious = () => {
//         const container = scrollContainerRef.current;
//         if (!isScrollAtStart) {
//             scrollTo(-container.offsetWidth);
//         }
//     };

//     return (
//         <>
//             <div className="w-full h-[430px] bg-blue500 relative">
//                 <h3 className="inline-block text-black ml-[46px] mt-[18px]">Kategori Pelatihan</h3>
//                 <p className="flex justify-start text-black ml-[46px] mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum aliquet arcu, sit amet eleifend tortor. Donec elementum enim quis ligula laoreet convallis. </p>
//                 <div
//                     className="flex overflow-x-scroll hide-scroll-bar"
//                     ref={scrollContainerRef}
//                     onScroll={handleScroll}
//                 >
//                     <div className="flex flex-nowrap ml-[46px] mt-[27px]">
//                         <div className="pr-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className=" px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className=" =px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="px-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                         <div className="pr-[17px]">
//                             <div className="btn border border-black rounded-none bg-white hover:bg-white flex flex-col justify-start items-start w-[239px] h-[290px]">
//                                 <div className="rounded-full border border-black flex justify-center items-center text-black w-[96px] h-[96px] mt-[19px] ml-[px]">
//                                     Logo Kategori
//                                 </div>
//                                 <h3 className='font-bold text-lg text-black mt-[36px]'>Kategori A</h3>
//                                 <p className='text-black mt-[8px]'>Deskripsi kategori</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Buttons aligned with content */}
//                 {!isScrollAtStart && (
//                     <button
//                         className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[165px] left-0 mt-[64px]"
//                         onClick={scrollToPrevious}
//                     >
                        <div className='grid grid-cols-1'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="place-self-center w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </div>
//                     </button>
//                 )}
//                 {!isScrollAtEnd && (
//                     <button
//                         className="bg-white border border-black text-black font-bold rounded-full w-[35px] h-[35px] absolute top-[165px] right-0 mt-[64px]"
//                         onClick={scrollToNext}
//                     >
//                         <div className='grid grid-cols-1'>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="place-self-center w-6 h-6"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                                 />
//                             </svg>
//                         </div>
//                     </button>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Nomer3;
