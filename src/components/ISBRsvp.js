import React, { useState } from "react";
import bgImage from "../assets/mystery.jpeg";
import logoImg from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";

export default function ISBRsvp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");


    // Two separate access keys — one per target email.
    // Each key sends to the email it was registered with.
    const accessKeys = [
      "8d28f9a2-c2e5-4aab-bb39-bf36ce45eda3",       // registered with eshantripathi005@gmail.com
      "fd740bd8-5bae-433e-8f87-86a0ea387846",       // registered with mysterymansion.in@gmail.com
    ];

    const commonPayload = {
      subject: `Mystery Mansion RSVP — ${formData.name}`,
      from_name: "Mystery Mansion RSVP",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      "Will be attending": formData.attending,
      "Number of guests": formData.guests,
    };

    try {
      // Send to Google Sheets via GET with query params (most reliable for GAS)
      const sheetsUrl = "https://script.google.com/macros/s/AKfycbw7lLDMKwiEmcDTsD00a9lPl1EvI_s8yKCs41WaufVHh7XjuHYBmuZzxxMSXuL_eT3J/exec";
      try {
        const params = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          attending: formData.attending,
          guests: formData.guests || "",
        });
        await fetch(`${sheetsUrl}?${params.toString()}`, { mode: "no-cors" });
      } catch (sheetErr) {
        console.warn("Google Sheets log failed (non-critical):", sheetErr);
      }

      // Send to both emails in parallel
      const results = await Promise.all(
        accessKeys.map((key) =>
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_key: key, ...commonPayload }),
          }).then((res) => res.json())
        )
      );

      console.log("Web3Forms responses:", results);

      // Consider success if at least one went through
      if (results.some((r) => r.success)) {
        setSubmitted(true);
      } else {
        console.error("Web3Forms errors:", results);
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        /* ===== RSVP PAGE ===== */
        .rsvp-page {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
        }

        .rsvp-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 47, 63, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, rgba(10, 10, 15, 0.7) 0%, rgba(10, 10, 15, 0.5) 40%, rgba(10, 10, 15, 0.85) 100%);
          z-index: 1;
        }

        .rsvp-page::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.6) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Floating fog particles */
        .rsvp-fog {
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
          pointer-events: none;
        }

        .rsvp-fog-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: subtle-drift 20s ease-in-out infinite;
        }

        .rsvp-fog-orb:nth-child(1) {
          width: 400px; height: 400px;
          background: rgba(201, 168, 76, 0.07);
          top: 10%; left: -5%;
          animation-delay: 0s;
          animation-duration: 25s;
        }

        .rsvp-fog-orb:nth-child(2) {
          width: 300px; height: 300px;
          background: rgba(139, 47, 63, 0.06);
          top: 60%; right: -5%;
          animation-delay: -8s;
          animation-duration: 22s;
        }

        .rsvp-fog-orb:nth-child(3) {
          width: 250px; height: 250px;
          background: rgba(201, 168, 76, 0.05);
          bottom: 10%; left: 40%;
          animation-delay: -15s;
          animation-duration: 28s;
        }

        .rsvp-content {
          position: relative;
          z-index: 10;
        }

        /* Back to home link */
        .rsvp-home-link {
          position: fixed;
          top: 1.25rem;
          left: 1.25rem;
          z-index: 50;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 50px;
          background: rgba(10, 10, 18, 0.7);
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .rsvp-home-link:hover {
          color: var(--gold-light);
          border-color: rgba(201, 168, 76, 0.4);
          background: rgba(10, 10, 18, 0.85);
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.1);
        }

        /* Form card */
        .rsvp-card {
          background: rgba(15, 15, 25, 0.65);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 560px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.5),
            0 0 60px rgba(201, 168, 76, 0.04),
            inset 0 1px 0 rgba(201, 168, 76, 0.08);
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .rsvp-card-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 0.25rem;
        }

        .rsvp-card-subtitle {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        /* Form elements */
        .rsvp-field {
          margin-bottom: 1.5rem;
        }

        .rsvp-label {
          display: block;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gold);
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }

        .rsvp-input,
        .rsvp-select {
          width: 100%;
          padding: 0.875rem 1.25rem;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-primary);
          background: rgba(10, 10, 18, 0.6);
          border: 1px solid rgba(201, 168, 76, 0.18);
          border-radius: 12px;
          outline: none;
          transition: all 0.3s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        .rsvp-input::placeholder {
          color: var(--text-secondary);
          opacity: 0.5;
          font-style: italic;
        }

        .rsvp-input:focus,
        .rsvp-select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1), 0 0 20px rgba(201, 168, 76, 0.08);
          background: rgba(10, 10, 18, 0.8);
        }

        .rsvp-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='%23C9A84C'%3E%3Cpath d='M6 8L0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.25rem center;
          padding-right: 3rem;
        }

        .rsvp-select option {
          background: #111118;
          color: var(--text-primary);
        }

        /* Submit button */
        .rsvp-submit {
          width: 100%;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem;
          border: 1.5px solid var(--crimson);
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(139, 47, 63, 0.6) 0%, rgba(139, 47, 63, 0.3) 100%);
          color: var(--gold-light);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 0.5rem;
        }

        .rsvp-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .rsvp-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(139, 47, 63, 0.8) 0%, rgba(139, 47, 63, 0.5) 100%);
          border-color: var(--gold);
          box-shadow: 0 0 30px rgba(139, 47, 63, 0.25), 0 0 60px rgba(201, 168, 76, 0.08);
          transform: translateY(-2px);
        }

        .rsvp-submit:hover:not(:disabled)::before {
          left: 100%;
        }

        .rsvp-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Spinner */
        .rsvp-spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(232, 212, 139, 0.3);
          border-top-color: var(--gold-light);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
          vertical-align: middle;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Divider */
        .rsvp-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-dim), transparent);
          margin: 2.5rem 0;
        }

        /* Event details */
        .rsvp-details {
          text-align: center;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s backwards;
        }

        .rsvp-details-notice {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.03em;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .rsvp-details-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .rsvp-detail-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .rsvp-detail-label {
          font-weight: 600;
          color: var(--gold);
        }

        .rsvp-detail-value {
          color: var(--text-secondary);
        }

        .rsvp-details-note {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-style: italic;
        }

        /* Success state */
        .rsvp-success {
          text-align: center;
          padding: 2rem 0;
          animation: fadeInUp 0.5s ease forwards;
        }

        .rsvp-success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .rsvp-success-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--gold-light);
          margin-bottom: 0.75rem;
        }

        .rsvp-success-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Error */
        .rsvp-error {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: #e74c3c;
          text-align: center;
          margin-top: 0.75rem;
          animation: fadeInUp 0.3s ease;
        }

        /* Ornamental decorations */
        .rsvp-ornament {
          text-align: center;
          font-size: 1.5rem;
          color: var(--gold-dim);
          letter-spacing: 0.25rem;
          margin: 1rem 0;
          opacity: 0.6;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .rsvp-page {
            background-attachment: scroll;
          }
        }

        @media (max-width: 640px) {
          .rsvp-card {
            padding: 1.75rem 1.25rem;
            border-radius: 16px;
            margin: 0 0.75rem;
          }

          .rsvp-card-title {
            font-size: 1.4rem;
          }

          .rsvp-card-subtitle {
            font-size: 0.82rem;
          }

          .rsvp-input,
          .rsvp-select {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            border-radius: 10px;
          }

          .rsvp-label {
            font-size: 0.78rem;
          }

          .rsvp-submit {
            padding: 0.875rem;
            font-size: 0.9rem;
          }

          .rsvp-detail-row {
            font-size: 0.85rem;
          }

          .rsvp-details-notice {
            font-size: 0.8rem;
          }

          .rsvp-home-link {
            top: 0.75rem;
            left: 0.75rem;
            font-size: 0.78rem;
            padding: 0.4rem 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .rsvp-fog-orb {
            display: none;
          }
        }
      `}</style>

      {/* Back to Home */}
      <Link to="/" className="rsvp-home-link" id="rsvp-home-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Home
      </Link>

      <section className="rsvp-page">
        {/* Atmospheric fog */}
        <div className="rsvp-fog">
          <div className="rsvp-fog-orb"></div>
          <div className="rsvp-fog-orb"></div>
          <div className="rsvp-fog-orb"></div>
        </div>

        <div className="rsvp-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem 3rem' }}>

          {/* Logo */}
          <div style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.6s ease forwards' }}>
            <img
              src={logoImg}
              alt="Mystery Mansion Logo"
              style={{
                height: 'clamp(60px, 12vw, 120px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(201, 168, 76, 0.15))',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.9rem)',
            textAlign: 'center',
            marginBottom: '2rem',
            animation: 'fadeInUp 0.6s ease 0.1s backwards',
          }}>
            Exclusive ISB Alumni Experience
          </p>

          {/* Form Card */}
          <div className="rsvp-card" id="rsvp-form-card">
            {!submitted ? (
              <>
                <h1 className="rsvp-card-title">Welcome to the Mystery Mansion</h1>
                <p className="rsvp-card-subtitle">
                  RSVP below for the <strong style={{ color: 'var(--gold-light)' }}>2nd May / 3rd May</strong> game.
                </p>

                <form onSubmit={handleSubmit} id="rsvp-form">
                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvp-name">Name</label>
                    <input
                      type="text"
                      id="rsvp-name"
                      name="name"
                      className="rsvp-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvp-email">ISB Email ID</label>
                    <input
                      type="email"
                      id="rsvp-email"
                      name="email"
                      className="rsvp-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvp-phone">Phone Number</label>
                    <input
                      type="text"
                      id="rsvp-phone"
                      name="phone"
                      className="rsvp-input"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvp-attending">For which night would you like your invitation to the Mystery Mansion?</label>
                    <select
                      id="rsvp-attending"
                      name="attending"
                      className="rsvp-select"
                      value={formData.attending}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Yes - 2nd May">2nd May 2026</option>
                      <option value="Yes - 3rd May">3rd May 2026</option>
                      <option value="Yes - Either date works">Either date works basis availability</option>
                    </select>
                  </div>

                  <div className="rsvp-field">
                    <label className="rsvp-label" htmlFor="rsvp-guests">Inquiry/Requests</label>
                    <input
                      type="text"
                      id="rsvp-guests"
                      name="guests"
                      className="rsvp-input"
                      placeholder="Optional"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="rsvp-submit"
                    id="rsvp-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="rsvp-spinner"></span>
                        Submitting…
                      </>
                    ) : (
                      "Request Invitation"
                    )}
                  </button>

                  {error && <p className="rsvp-error">{error}</p>}
                </form>
              </>
            ) : (
              <div className="rsvp-success">
                <div className="rsvp-success-icon">🕵️</div>
                <h2 className="rsvp-success-title">Request Received!</h2>
                <p className="rsvp-success-text">
                  Thank you, <strong style={{ color: 'var(--gold-light)' }}>{formData.name}</strong>.
                  We have received your response. Expect to hear from us soon with further details.
                </p>
              </div>
            )}
          </div>

          {/* Divider & Event Details */}
          <div style={{ maxWidth: '560px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>
            <div className="rsvp-divider"></div>

            <div className="rsvp-ornament">⚜ ✦ ⚜</div>

            <div className="rsvp-details">
              <p className="rsvp-details-notice">
                Invitations are extended on a first-come, first-served basis,
                <br />
                with each day limited to <strong>15 guests</strong>.
              </p>

              <div className="rsvp-details-grid">
                <div className="rsvp-detail-row">
                  <span className="rsvp-detail-label">Check-in:</span>
                  <span className="rsvp-detail-value">5 PM</span>
                </div>
                <div className="rsvp-detail-row">
                  <span className="rsvp-detail-label">Game start:</span>
                  <span className="rsvp-detail-value">Undisclosed</span>
                </div>
                <div className="rsvp-detail-row">
                  <span className="rsvp-detail-label">Game end time:</span>
                  <span className="rsvp-detail-value">Midnight</span>
                </div>
              </div>


            </div>

            <div className="rsvp-ornament" style={{ marginTop: '1.5rem' }}>⚜ ✦ ⚜</div>
          </div>

        </div>
      </section>
    </>
  );
}
