const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Your current booked dates (from your React component)
const bookedDates = [
  '2025-08-01', '2025-08-08', '2025-08-15', '2025-08-29'
];

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit!');
  res.json({ message: 'Backend server is running!' });
});

// iCal export endpoint
app.get('/api/calendar/export', (req, res) => {
  console.log('Calendar export requested!');
  try {
    const icalContent = generateICalContent(bookedDates);
    
    res.set({
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="mysterymansion-calendar.ics"',
      'Cache-Control': 'no-cache'
    });
    
    res.send(icalContent);
  } catch (error) {
    console.error('Error generating calendar:', error);
    res.status(500).json({ error: 'Failed to generate calendar' });
  }
});

function generateICalContent(bookedDates) {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  let icalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mystery Mansion//Booking Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ].join('\r\n') + '\r\n';

  bookedDates.forEach((dateString, index) => {
    const date = new Date(dateString);
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    
    const startDate = formatICalDate(date);
    const endDate = formatICalDate(nextDay);
    
    icalContent += [
      'BEGIN:VEVENT',
      `UID:booking-${index}-${dateString}@mysterymansion.in`,
      `DTSTART;VALUE=DATE:${startDate}`,
      `DTEND;VALUE=DATE:${endDate}`,
      `DTSTAMP:${timestamp}`,
      'SUMMARY:Mystery Mansion - Booked',
      'DESCRIPTION:Property booked via Mystery Mansion website',
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT'
    ].join('\r\n') + '\r\n';
  });

  icalContent += 'END:VCALENDAR\r\n';
  return icalContent;
}

function formatICalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

app.listen(PORT, () => {
  console.log('=================================');
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test: http://localhost:${PORT}/api/test`);
  console.log(`Calendar: http://localhost:${PORT}/api/calendar/export`);
  console.log('=================================');
});

console.log('Starting server...');