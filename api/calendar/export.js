// api/calendar/export.js
export default function handler(req, res) {
  // Your booked dates (you can later connect this to your database)
  const bookedDates = ['2025-08-01', '2025-08-08', '2025-08-15', '2025-08-29'];
  
  const icalContent = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Mystery Mansion//EN\r\nBEGIN:VEVENT\r\nUID:test@mysterymansion.in\r\nDTSTART;VALUE=DATE:20250801\r\nDTEND;VALUE=DATE:20250802\r\nSUMMARY:Mystery Mansion - Booked\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n`;
  
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="mysterymansion-calendar.ics"');
  res.status(200).send(icalContent);
}