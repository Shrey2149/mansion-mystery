import React, { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [phoneNumber, setPhoneNumber] = useState('918279845322'); // Default fallback number
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to extract phone number from the current page
    const extractPhoneNumber = () => {
      try {
        // Look for WhatsApp numbers in the page content
        const pageText = document.body.innerText;
        
        // Regular expression to find the specific pattern in your page
        const whatsappRegex = /WhatsApp:\s*\+?(\d{2}\s?\d{10})/i;
        const generalPhoneRegex = /\+?91\s?[6-9]\d{9}/g;
        
        let matches = pageText.match(whatsappRegex);
        if (!matches) {
          matches = pageText.match(generalPhoneRegex);
        }
        
        if (matches && matches.length > 0) {
          // Clean the number and ensure it has country code
          let cleanNumber = matches[0].replace(/[^\d]/g, ''); // Remove all non-digits
          if (cleanNumber.length === 10) {
            cleanNumber = '91' + cleanNumber;
          }
          if (cleanNumber.length === 12 && cleanNumber.startsWith('91')) {
            setPhoneNumber(cleanNumber);
          }
        }
      } catch (error) {
        console.log('Phone number extraction failed, using default');
        // Keep default number
      }
    };

    // Extract phone number when component mounts
    setTimeout(extractPhoneNumber, 500); // Small delay to ensure DOM is loaded

    // Also extract when page content changes (for SPAs)
    const observer = new MutationObserver(() => {
      setTimeout(extractPhoneNumber, 100);
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      characterData: true 
    });

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    setIsVisible(false); // Hide button after click
    const defaultMessage = "Hi! I'm interested in booking the mystery property experience in Gurugram. Could you please provide more details about availability and pricing?";
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab/window
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: float 3s ease-in-out infinite, pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-float:active {
          transform: scale(1.05);
        }

        .whatsapp-icon {
          width: 34px;
          height: 34px;
          fill: white;
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover .whatsapp-icon {
          transform: scale(1.1);
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-6px) rotate(1deg); 
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0.1);
          }
          100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .whatsapp-float {
            bottom: 24px;
            left: 24px;
            width: 58px;
            height: 58px;
          }
          
          .whatsapp-icon {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 56px;
            height: 56px;
            bottom: 20px;
            left: 20px;
          }
          
          .whatsapp-icon {
            width: 30px;
            height: 30px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-float {
            width: 52px;
            height: 52px;
            bottom: 16px;
            left: 16px;
          }
          
          .whatsapp-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* Tooltip for desktop */
        .whatsapp-tooltip {
          position: absolute;
          left: -250px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
          backdrop-filter: blur(10px);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-right: 8px solid rgba(0, 0, 0, 0.9);
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
        }

        /* Hide tooltip on mobile */
        @media (max-width: 768px) {
          .whatsapp-tooltip {
            display: none;
          }
        }

        /* Ensure it stays above other elements */
        .whatsapp-float {
          isolation: isolate;
        }
      `}</style>
      
      <div 
        className="whatsapp-float"
        onClick={openWhatsApp}
        title="Chat with us on WhatsApp"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openWhatsApp();
          }
        }}
      >
        <div className="whatsapp-tooltip">
          Book your mystery experience!
        </div>
        
        <svg 
          className="whatsapp-icon" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488z"/>
        </svg>
      </div>
    </>
  );
};

export default WhatsAppFloat;