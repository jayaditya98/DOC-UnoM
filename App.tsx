

import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { FACULTY_MEMBERS, COURSES_OFFERED, HISTORY_EVENTS, BOOK_CONTENT, CONTACT_INFO } from './constants';
import type { Faculty, CourseCategory, HistoryEvent, BookSection } from './types';

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

// --- Reusable Components for Inner Pages ---
const PageShell: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-stone-800/50 backdrop-blur-md rounded-lg shadow-2xl border border-stone-600/50 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl md:text-5xl text-amber-200 drop-shadow-lg">{title}</h1>
            <Link to="/" className="flex items-center px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                <HomeIcon />
                Home
            </Link>
        </div>
        <div className="border-t-2 border-amber-500/50 my-4"></div>
        <div>{children}</div>
    </div>
);

// --- Inner Page Definitions ---
const SyllabusPage = () => <PageShell title="Syllabus & Fee Structure"><p className="text-lg text-amber-100">Information about the syllabus and fee structure will be updated here soon. Please check back later for details on our comprehensive curriculum and transparent fee policies.</p></PageShell>;
const LearningZonePage = () => <PageShell title="Learning Zone"><p className="text-lg text-amber-100">Welcome to the Learning Zone. This section will feature access to online resources, lecture notes, and other academic materials to support your studies. Content is currently being prepared.</p></PageShell>;
const AlumniHallPage = () => <PageShell title="Alumni Hall"><p className="text-lg text-amber-100">Our esteemed alumni are the pride of our department. This section will celebrate their achievements and provide a platform for networking. The alumni portal is under construction.</p></PageShell>;

const CoursesPage = () => (
    <PageShell title="Courses Offered">
        <div className="space-y-8">
            {COURSES_OFFERED.map((category: CourseCategory) => (
                <div key={category.title} className="p-6 bg-stone-900/50 rounded-lg shadow-md border border-stone-700">
                    <h2 className="text-2xl font-semibold text-amber-300 mb-4">{category.title}</h2>
                    <ul className="list-disc list-inside space-y-2 text-amber-100 text-lg">
                        {category.courses.map(course => <li key={course}>{course}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </PageShell>
);

const FacultiesPage = () => (
    <PageShell title="Our Faculties">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACULTY_MEMBERS.map((faculty: Faculty) => (
                <div key={faculty.name} className="bg-stone-900/50 p-6 rounded-lg shadow-lg border border-stone-700 transition-all duration-300 hover:shadow-amber-900/50 hover:border-amber-700">
                    <h2 className="text-2xl font-bold text-amber-300">{faculty.name}</h2>
                    <p className="text-amber-400 font-semibold text-lg">{faculty.title}</p>
                    <p className="text-amber-100 mt-2">{faculty.qualifications}</p>
                    <div className="mt-4 text-sm text-amber-200">
                        {faculty.contact.email && <p><strong>Email:</strong> {faculty.contact.email}</p>}
                        {faculty.contact.phone && <p><strong>Phone:</strong> {faculty.contact.phone}</p>}
                    </div>
                </div>
            ))}
        </div>
    </PageShell>
);

// --- Home Page and its Components ---

const Platformer = () => {
    const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);

    const doors = [
        {
            to: "/syllabus",
            title: "Syllabus & Fees",
            closedSrc: "https://i.postimg.cc/BZgLwGZH/door1.png",
            openSrc: "https://i.postimg.cc/bYCYtYNC/opendoor1.png",
            position: { top: '14%', left: '28%', width: '16.5%', height: '34%' },
            bannerSrc: "https://i.postimg.cc/R0GcvYyp/SYLLABUS-AND-LEARNING-1-Background-Removed.png",
        },
        {
            to: "/learning-zone",
            title: "Learning Zone",
            closedSrc: "https://i.postimg.cc/htHf7DMW/door2.png",
            openSrc: "https://i.postimg.cc/NfZgdNXR/opendoor2.png",
            position: { top: '14%', left: '55%', width: '16.5%', height: '34%' },
            bannerSrc: "https://i.postimg.cc/PxRYwwtm/SYLLABUS-AND-LEARNING-2-Background-Removed.png",
        },
        {
            to: "/courses",
            title: "Courses",
            closedSrc: "https://i.postimg.cc/9fZzd6N4/door3.png",
            openSrc: "https://i.postimg.cc/25DCDV26/opendoor3.png",
            position: { top: '58%', left: '12%', width: '16.5%', height: '34%' },
            bannerSrc: "https://i.postimg.cc/Twwn19Xd/SYLLABUS-AND-LEARNING-3-Background-Removed.png",
        },
        {
            to: "/alumni-hall",
            title: "Alumni Hall",
            closedSrc: "https://i.postimg.cc/rwdDm01N/door4.png",
            openSrc: "https://i.postimg.cc/fRXMpx7p/opendoor4.png",
            position: { top: '58%', left: '42%', width: '16.5%', height: '34%' },
            bannerSrc: "https://i.postimg.cc/t706rGnJ/SYLLABUS-AND-LEARNING-4-Background-Removed.png",
        },
        {
            to: "/faculties",
            title: "Faculties",
            closedSrc: "https://i.postimg.cc/dtN7wmy0/door5.png",
            openSrc: "https://i.postimg.cc/tCsqt0sX/opendoor5.png",
            position: { top: '58%', left: '73%', width: '16.5%', height: '34%' },
            bannerSrc: "https://i.postimg.cc/pr58YLT3/SYLLABUS-AND-LEARNING-5-Background-Removed.png",
        },
    ];

    return (
        <section className="w-full mb-8 md:mb-12">
            <div className="text-center mb-2 px-4">
                <h1 className="text-4xl md:text-6xl text-amber-200 drop-shadow-lg font-black-chancery">Department of Commerce</h1>
                <p className="text-2xl md:text-3xl text-amber-300 mt-2 font-black-chancery">University of Madras</p>
            </div>
            <div
                className="relative w-full"
                aria-label="University corridor with interactive doors."
            >
                {/* --- VISUAL LAYERS --- */}
                <img
                    src="https://i.postimg.cc/fLYXbthr/gamifiedwebsitewallpaer-onlybg.png"
                    alt="University corridor background"
                    className="block w-full h-auto"
                />
                
                {/* Banners as static overlays */}
                {doors.map(door => (
                    <img
                        key={`${door.title}-banner`}
                        src={door.bannerSrc}
                        alt={`${door.title} banner`}
                        className="absolute top-0 left-0 w-full h-auto pointer-events-none"
                    />
                ))}

                {/* Doors */}
                {doors.map(door => (
                    <React.Fragment key={door.title}>
                        <img
                            src={door.closedSrc}
                            alt=""
                            className="absolute inset-0 w-full h-auto pointer-events-none"
                        />
                        <img
                            src={door.openSrc}
                            alt=""
                            className={`absolute inset-0 w-full h-auto pointer-events-none transition-opacity duration-300 will-change-opacity transform-gpu ${
                                hoveredDoor === door.title ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    </React.Fragment>
                ))}

                {/* --- INTERACTIVE HOTSPOTS --- */}
                {doors.map(door => (
                    <Link
                        key={`${door.title}-link`}
                        to={door.to}
                        className="absolute cursor-pointer"
                        style={door.position}
                        onMouseEnter={() => setHoveredDoor(door.title)}
                        onMouseLeave={() => setHoveredDoor(null)}
                        aria-label={door.title}
                    />
                ))}
            </div>
        </section>
    );
};


const InteractiveBook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const bookPages = [
        "https://i.postimg.cc/5tr0Ss51/openpage1-Background-Removed.png", // About
        "https://i.postimg.cc/HsmLzcMJ/openpage2-Background-Removed.png", // Objective
        "https://i.postimg.cc/T2gwnqKM/openpage3-Background-Removed.png", // Mission
        "https://i.postimg.cc/WzG1jjBb/openpage4-Background-Removed.png"  // Vision
    ];

    useEffect(() => {
        // Preload images to prevent loading lag when turning pages
        bookPages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, [bookPages]);

    const bookmarkTitles = ["About", "Objective", "Mission", "Vision"];

    const handleNextPage = () => {
        if (activeIndex < bookPages.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrevPage = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        } else {
            setIsOpen(false); // Close the book if on the first page
        }
    };

    const openBook = () => {
        setIsOpen(true);
        setActiveIndex(0);
    }

    return (
        <section className="flex flex-col items-center my-8 md:my-12">
            <h2 className="text-3xl text-amber-200 mb-2 text-center">The Department Chronicle</h2>
            
            {/* Consistent height container to prevent layout shift */}
            <div className="relative w-full max-w-5xl xl:max-w-6xl h-[450px] md:h-[600px]">
                {!isOpen ? (
                    <div className="relative w-full h-full">
                        <img
                            src="https://i.postimg.cc/CKYm74NZ/Untitled-design-1-Background-Removed.png"
                            alt="Closed Chronicle Book"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                        <button
                            onClick={openBook}
                            className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg cursor-pointer"
                            aria-label="Open the department chronicle book"
                        />
                    </div>
                ) : (
                    <>
                        {/* Layered Images for Open Book */}
                        <div className="relative w-full h-full">
                            {bookPages.map((src, index) => (
                                <img
                                    key={src}
                                    src={src}
                                    alt={`Page ${index + 1}: ${bookmarkTitles[index]}`}
                                    className={`absolute inset-0 w-full h-full object-contain ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Invisible Click Handlers for page turning */}
                        <div className="absolute inset-0 flex">
                            <button
                                onClick={handlePrevPage}
                                className="w-1/2 h-full cursor-pointer"
                                aria-label="Previous Page"
                            ></button>
                            <button
                                onClick={handleNextPage}
                                className="w-1/2 h-full cursor-pointer"
                                aria-label="Next Page"
                            ></button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

const HistoryBar = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // This effect handles the wheel-to-scroll functionality
    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            element.scrollLeft += e.deltaY;
        };
        
        element.addEventListener('wheel', onWheel, { passive: false });
        return () => element.removeEventListener('wheel', onWheel);
    }, []);

    // This effect sets the initial scroll position to the end of the timeline
    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            element.scrollLeft = element.scrollWidth;
        }
    }, []);

    // This effect handles the fade-in-on-scroll animation for event cards
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: scrollRef.current,
                threshold: 0.1,
            }
        );

        const currentRef = scrollRef.current;
        if (currentRef) {
            const cards = currentRef.querySelectorAll('.history-event-card');
            cards.forEach((card) => observer.observe(card));
        }

        return () => {
            if (currentRef) {
                const cards = currentRef.querySelectorAll('.history-event-card');
                cards.forEach((card) => observer.unobserve(card));
            }
        };
    }, []);

    return (
        <section className="my-8 md:my-12 w-full animate-fade-in">
             <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .history-event-card {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .history-event-card.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .fade-mask {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 150px);
                    mask-image: linear-gradient(to right, transparent, black 150px);
                }
             `}</style>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl text-amber-200 mb-8 text-center">Our History</h2>
            </div>
            
            <div 
                ref={scrollRef}
                className="bg-stone-800/40 p-4 shadow-inner border-y border-stone-600/50 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing fade-mask"
            >
                <div className="relative flex" style={{ width: `${HISTORY_EVENTS.length * 18}rem` }}>
                    {/* Timeline bar */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-500/30 -translate-y-1/2"></div>
                    
                    {/* Events */}
                    {HISTORY_EVENTS.map((event: HistoryEvent, index) => (
                        <div key={event.year + event.description} className="relative flex-shrink-0 w-72 h-96">
                            {/* Container for the card and branch, centered horizontally */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-64 flex items-center
                                ${index % 2 === 0
                                    ? 'flex-col top-1/2' // For items below the timeline, branch is on top of card
                                    : 'flex-col-reverse bottom-1/2' // For items above, branch is below card
                                }`}
                            >
                                {/* The branch is the connector. */}
                                <div className="w-0.5 h-12 bg-amber-500/50"></div>
                                {/* The card */}
                                <div
                                    className="p-4 bg-stone-900 rounded-lg shadow-md border border-stone-700 text-center w-full history-event-card"
                                >
                                    <p className="text-3xl font-bold text-amber-400">{event.year}</p>
                                    <p className="mt-2 text-amber-100">{event.description}</p>
                                </div>
                            </div>

                            {/* Dot on the timeline */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-stone-800 z-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomePage = () => (
    <>
        <Platformer />
        <div className="max-w-7xl mx-auto px-4 animate-fade-in">
            <InteractiveBook />
        </div>
        <HistoryBar />
    </>
);

const App = () => {
    return (
        <HashRouter>
            <div className="min-h-screen w-full text-white selection:bg-amber-500 selection:text-white flex flex-col">
                <main className="py-4 flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/syllabus" element={<SyllabusPage />} />
                        <Route path="/learning-zone" element={<LearningZonePage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/alumni-hall" element={<AlumniHallPage />} />
                        <Route path="/faculties" element={<FacultiesPage />} />
                    </Routes>
                </main>

                <footer className="bg-black/50 backdrop-blur-sm p-6 text-center text-amber-200 border-t border-amber-800/50">
                    <p>{CONTACT_INFO.address}</p>
                    <p>Phone: {CONTACT_INFO.phone} | Email: {CONTACT_INFO.email}</p>
                </footer>
            </div>
        </HashRouter>
    );
};

export default App;
