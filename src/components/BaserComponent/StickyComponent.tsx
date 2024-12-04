import { useState, useEffect } from 'react';
import { IGetProfile } from '../../Types/api';
import BookingFromBostanyProfile from './BookingFromBostanyProfile';
const StickyScheduleComponent = ({ BostanyData }: { BostanyData: IGetProfile }) => {
    const [isFixed, setIsFixed] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        // Check if we should fix the component
        if (scrollY > 0 && scrollY < documentHeight - windowHeight - 250) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            style={{
                position: isFixed ? 'fixed' : 'absolute',
                top: isFixed ? '150px' : 'auto', // Adjust as needed
                left: '100px',
                transition: 'position 0.3s',
                zIndex: 30,
            }}
        >
            <BookingFromBostanyProfile BostanyData={BostanyData} />
        </div>
    );
};

export default StickyScheduleComponent;