// api/calendar/import.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Your Airbnb calendar URL (replace with your actual URL)
    const airbnbCalendarUrl = 'https://www.airbnb.co.uk/calendar/ical/YOUR_CALENDAR_ID';
    
    // Fetch the Airbnb calendar
    const response = await fetch(airbnbCalendarUrl);
    const icalData = await response.text();
    
    // Parse iCal data to extract booked dates
    const bookedDates = parseICalDates(icalData);
    
    res.status(200).json({
      success: true,
      bookedDates: bookedDates,
      message: 'Airbnb calendar imported successfully'
    });
    
  } catch (error) {
    console.error('Error importing Airbnb calendar:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to import Airbnb calendar'
    });
  }
}

// Helper function to parse iCal data and extract dates
function parseICalDates(icalData) {
  const bookedDates = [];
  const events = icalData.split('BEGIN:VEVENT');
  
  events.forEach(event => {
    if (event.includes('DTSTART')) {
      // Extract date from DTSTART line
      const startMatch = event.match(/DTSTART[;:]([^\r\n]+)/);
      if (startMatch) {
        let dateStr = startMatch[1];
        
        // Handle different date formats
        if (dateStr.includes('VALUE=DATE:')) {
          dateStr = dateStr.replace('VALUE=DATE:', '');
        }
        
        // Convert YYYYMMDD to YYYY-MM-DD format
        if (dateStr.length === 8 && /^\d{8}$/.test(dateStr)) {
          const year = dateStr.substring(0, 4);
          const month = dateStr.substring(4, 6);
          const day = dateStr.substring(6, 8);
          bookedDates.push(`${year}-${month}-${day}`);
        }
      }
    }
  });
  
  return [...new Set(bookedDates)]; // Remove duplicates
}