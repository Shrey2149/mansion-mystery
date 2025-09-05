import React, { useState } from 'react';
import { Info } from 'lucide-react';
import backgroundImg from "../assets/instructions-bg.png";

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Mock available dates - you can replace this with actual data
  const availableDates = [
  '2025-08-02', '2025-08-03', '2025-08-09', '2025-08-10', 
  '2025-08-16', '2025-08-17', '2025-08-23', '2025-08-24', 
  '2025-08-30', '2025-08-31', '2025-10-15'
  ];

    const bookedDates = [
    '2025-08-01', '2025-08-08', '2025-08-15', '2025-08-29'
    ];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isDateAvailable = (dateString) => {
    return availableDates.includes(dateString);
  };

  const isDateBooked = (dateString) => {
    return bookedDates.includes(dateString);
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const handleDateClick = (date) => {
    const dateString = formatDate(date);
    if (isDateAvailable(dateString) && !isPastDate(date)) {
      setSelectedDate(date);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateString = formatDate(date);
      const isAvailable = isDateAvailable(dateString);
      const isBooked = isDateBooked(dateString);
      const isPast = isPastDate(date);
      const isSelected = selectedDate && formatDate(selectedDate) === dateString;

      let cellClass = "h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ";
      
      if (isPast) {
        cellClass += "text-gray-500 cursor-not-allowed";
      } else if (isBooked) {
        cellClass += "bg-red-200 text-red-800 cursor-not-allowed";
      } else if (isAvailable) {
        if (isSelected) {
          cellClass += "bg-green-600 text-white shadow-lg";
        } else {
          cellClass += "bg-green-200 text-green-800 hover:bg-green-300";
        }
      } else {
        cellClass += "text-gray-400 hover:bg-gray-100";
      }

      days.push(
        <div
          key={day}
          className={cellClass}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <>
    <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .wavy-letter {
            display: inline-block;
            animation: wave 5s ease-in-out infinite;
          }
        
          .wavy-letter:nth-child(1) { animation-delay: 0s; }
          .wavy-letter:nth-child(2) { animation-delay: 0.1s; }
          .wavy-letter:nth-child(3) { animation-delay: 0.2s; }
          .wavy-letter:nth-child(4) { animation-delay: 0.3s; }
          .wavy-letter:nth-child(5) { animation-delay: 0.4s; }
          .wavy-letter:nth-child(6) { animation-delay: 0.5s; }
          .wavy-letter:nth-child(7) { animation-delay: 0.6s; }
          .wavy-letter:nth-child(8) { animation-delay: 0.7s; }
          .wavy-letter:nth-child(9) { animation-delay: 0.8s; }
          .wavy-letter:nth-child(10) { animation-delay: 0.9s; }
          .wavy-letter:nth-child(11) { animation-delay: 1s; }
          .wavy-letter:nth-child(12) { animation-delay: 1.1s; }
          .wavy-letter:nth-child(13) { animation-delay: 1.2s; }
          .wavy-letter:nth-child(14) { animation-delay: 1.3s; }
          .wavy-letter:nth-child(15) { animation-delay: 1.4s; }
          .wavy-letter:nth-child(16) { animation-delay: 1.5s; }
          .wavy-letter:nth-child(17) { animation-delay: 1.6s; }
          .wavy-letter:nth-child(18) { animation-delay: 1.7s; }
          .wavy-letter:nth-child(19) { animation-delay: 1.8s; }
          .wavy-letter:nth-child(20) { animation-delay: 1.9s; }
          .wavy-letter:nth-child(21) { animation-delay: 2s; }
          .wavy-letter:nth-child(22) { animation-delay: 2.1s; }
          .wavy-letter:nth-child(23) { animation-delay: 2.2s; }
          .wavy-letter:nth-child(24) { animation-delay: 2.3s; }
          .wavy-letter:nth-child(25) { animation-delay: 2.4s; }
          .wavy-letter:nth-child(26) { animation-delay: 2.5s; }
          .wavy-letter:nth-child(27) { animation-delay: 2.6s; }
          .wavy-letter:nth-child(28) { animation-delay: 2.7s; }
          .wavy-letter:nth-child(29) { animation-delay: 2.8s; }
          .wavy-letter:nth-child(30) { animation-delay: 2.9s; }
          .wavy-letter:nth-child(31) { animation-delay: 3s; }
          .wavy-letter:nth-child(32) { animation-delay: 3.1s; }
          .wavy-letter:nth-child(33) { animation-delay: 3.2s; }
          .wavy-letter:nth-child(34) { animation-delay: 3.3s; }
          .wavy-letter:nth-child(35) { animation-delay: 3.4s; }
          .wavy-letter:nth-child(36) { animation-delay: 3.5s; }
          .wavy-letter:nth-child(37) { animation-delay: 3.6s; }
          .wavy-letter:nth-child(38) { animation-delay: 3.7s; }
          .wavy-letter:nth-child(39) { animation-delay: 3.8s; }
          .wavy-letter:nth-child(40) { animation-delay: 3.9s; }
          .wavy-letter:nth-child(41) { animation-delay: 4.0s; }
          .wavy-letter:nth-child(42) { animation-delay: 4.1s; }
          .wavy-letter:nth-child(43) { animation-delay: 4.2s; }
          .wavy-letter:nth-child(44) { animation-delay: 4.3s; }
          .wavy-letter:nth-child(45) { animation-delay: 4.4s; }
          .wavy-letter:nth-child(46) { animation-delay: 4.5s; }
          .wavy-letter:nth-child(47) { animation-delay: 4.6s; }
          .wavy-letter:nth-child(48) { animation-delay: 4.7s; }
          .wavy-letter:nth-child(49) { animation-delay: 4.8s; }
          .wavy-letter:nth-child(50) { animation-delay: 4.9s; }
          .wavy-letter:nth-child(51) { animation-delay: 5.0s; }

          /* Mobile-responsive styles */
          @media (max-width: 1024px) {
            .mobile-container {
              padding: 1rem !important;
            }
            
            .mobile-header {
              margin-bottom: 2rem !important;
            }
            
            .mobile-title {
              font-size: 2rem !important;
            }
            
            .mobile-subtitle {
              font-size: 1rem !important;
            }
            
            .mobile-content {
              flex-direction: column !important;
              gap: 2rem !important;
            }
            
            .mobile-calendar {
              width: 100% !important;
            }
            
            .mobile-sidebar {
              width: 100% !important;
            }
          }

          @media (max-width: 768px) {
            .mobile-title {
              font-size: 1.75rem !important;
            }
            
            .mobile-subtitle {
              font-size: 0.9rem !important;
            }
            
            .mobile-calendar-header {
              font-size: 1.25rem !important;
            }
            
            .mobile-calendar-grid {
              gap: 1px !important;
            }
            
            .mobile-calendar-cell {
              height: 2.5rem !important;
              width: 2.5rem !important;
              font-size: 0.75rem !important;
            }
            
            .mobile-legend {
              flex-direction: column !important;
              gap: 0.5rem !important;
            }
            
            .mobile-sidebar-title {
              font-size: 1.25rem !important;
            }
          }

          @media (max-width: 640px) {
            .mobile-title {
              font-size: 1.5rem !important;
              line-height: 1.3 !important;
            }
            
            .mobile-subtitle {
              font-size: 0.8rem !important;
            }
            
            .mobile-calendar-header {
              font-size: 1.1rem !important;
            }
            
            .mobile-calendar-cell {
              height: 2.25rem !important;
              width: 2.25rem !important;
              font-size: 0.7rem !important;
            }
            
            .mobile-day-header {
              font-size: 0.7rem !important;
              height: 1.5rem !important;
            }
          }

          @media (max-width: 480px) {
            .mobile-container {
              padding: 0.75rem !important;
            }
            
            .mobile-title {
              font-size: 1.25rem !important;
            }
            
            .mobile-calendar-cell {
              height: 2rem !important;
              width: 2rem !important;
              font-size: 0.65rem !important;
            }
            
            .mobile-day-header {
              font-size: 0.6rem !important;
            }
            
            .mobile-calendar-header {
              font-size: 1rem !important;
            }
            
            .mobile-sidebar-title {
              font-size: 1.1rem !important;
            }
          }
        `}
    </style>
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-between px-16 text-gray-300 mobile-container"
      style={{ backgroundImage: `url(${backgroundImg})`,
    filter : 'brightness(1.2)' }}
    >
    
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mobile-header">
          <h1 className="text-5xl font-bold mb-4 mobile-title" style={{ fontFamily: "Avenir" }}>
            {"Plan Your Stay (Gurugram)".split('').map((letter, index) => (
              <span key={index} className="wavy-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            
          </h1>
          <p className="text-xl text-gray-300 mobile-subtitle" style={{ fontFamily: "Avenir" }}>
            
            Select an available date for your Mystery Mansion adventure
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mobile-content">
          {/* Calendar */}
          <div className="rounded-2xl p-8 flex-1 border border-white mobile-calendar" style = {{backgroundColor: '#171616'}}>
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">←</span>
              </button>
              <h2 className="text-2xl font-bold mobile-calendar-header" style={{ fontFamily: "Avenir" }}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysOfWeek.map(day => (
                <div key={day} className="h-8 flex items-center justify-center text-gray-300 text-sm font-medium mobile-day-header">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mobile-calendar-grid">
              {renderCalendarDays().map((day, index) => (
                <div key={index} className={day.props.className.includes('h-12') ? day.props.className.replace('h-12 w-12', 'mobile-calendar-cell') : day.props.className} onClick={day.props.onClick}>
                  {day.props.children}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm mobile-legend">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-200 rounded"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 rounded"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-500 rounded"></div>
                <span>Past/Unavailable</span>
              </div>
            </div>
          </div>

          {/* Booking Details Sidebar */}
          <div className="rounded-2xl p-8 lg:w-80 border border-white mobile-sidebar" style = {{backgroundColor: '#171616'}}>
            <h3 className="text-2xl font-bold mb-6 mobile-sidebar-title" style={{ fontFamily: "Avenir" }}>
              Booking Details
            </h3>

            {selectedDate ? (
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm">Selected Date</p>
                  <p className="text-xl font-semibold">
                    {selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-lg">Gurugram Villa</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-lg">5PM - 10AM (Next Day)</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Group Size</p>
                  <p className="text-lg">8-12 People</p>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center text-lg font-semibold mb-4">
                    <div className="flex items-center gap-2 relative">
                      <span>Total</span>
                      <div 
                        className="relative"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      >
                        <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-help transition-colors" />
                        {showTooltip && (
                          <div className="absolute bottom-6 left-0 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-lg z-10 w-64 border border-gray-600">
                            <div className="text-center">
                              Includes complete charges for stay and game for entire group of 8-12.
                            </div>
                            <div className="absolute top-full left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <span>₹35,000</span>
                  </div>
                  <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Confirm Booking
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg mb-4">Select a date to continue</p>
                <p className="text-gray-500 text-sm">
                  Choose an available date from the calendar to see booking details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}