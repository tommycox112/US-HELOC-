"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    setIsSubmitting(true);

    try {
      const response = await fetch('https://vault.usheloc.com/api/submit-application', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert('Form Submitted! Data has been successfully dropped onto the secure local hardware array.');
        form.reset();
      } else {
        alert('Submission processing issue: ' + result.error);
      }
    } catch (error) {
      console.error('Data pipeline connection dropped:', error);
      alert('Transmission error: Could not reach the local physical data server. Verify backend hardware is powered on.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f9fbfd]">
      <Header />
      <main className="flex-1 py-10 px-5">
        <div 
          className="max-w-[700px] mx-auto bg-white p-10 rounded-xl relative"
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="mb-8">
            <p className="text-sm text-[#666666] font-medium m-0">Home Equity Line of Credit</p>
            <h1 className="text-[32px] font-bold text-black mt-1 mb-0">New Inquiry</h1>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Property Information */}
            <h3 className="text-lg font-semibold border-b border-[#e5e7eb] pb-2 mb-5 text-[#111111]">
              Property Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-8 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Property Address For Financing *
                </label>
                <input
                  type="text"
                  name="property_address"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Apt, Suite, Unit
                </label>
                <input
                  type="text"
                  name="property_unit"
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  City *
                </label>
                <input
                  type="text"
                  name="property_city"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-6 md:col-span-3 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  State *
                </label>
                <select
                  name="property_state"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="" disabled>Select</option>
                  {US_STATES.map((state) => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-6 md:col-span-3 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Zipcode *
                </label>
                <input
                  type="text"
                  name="property_zip"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Ownership Type
                </label>
                <select
                  name="ownership_type"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="" disabled>Select</option>
                  <option value="Sole owner">Sole owner</option>
                  <option value="Joint owner">Joint owner</option>
                  <option value="Trust">Trust</option>
                  <option value="LLC">LLC</option>
                </select>
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Occupancy Type
                </label>
                <select
                  name="occupancy_type"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="" disabled>Select</option>
                  <option value="Primary residence">Primary residence</option>
                  <option value="Secondary residence">Secondary residence</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Is The Property Currently For Sale?
                </label>
                <select
                  name="is_for_sale"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="" disabled>Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>

            {/* Borrower Information */}
            <h3 className="text-lg font-semibold border-b border-[#e5e7eb] pb-2 mb-5 mt-9 text-[#111111]">
              Borrower Information
            </h3>
            <p className="text-sm text-[#666666] -mt-2.5 mb-5">
              For verification purposes, please provide the legal name of the borrower as it appears on their government-issued ID.
            </p>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-5 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Legal First Name
                </label>
                <input
                  type="text"
                  name="borrower_first_name"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-5 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Legal Last Name
                </label>
                <input
                  type="text"
                  name="borrower_last_name"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-2 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Suffix
                </label>
                <select
                  name="borrower_suffix"
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="">Select</option>
                  <option value="Jr">Jr.</option>
                  <option value="Sr">Sr.</option>
                  <option value="III">III</option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="borrower_dob"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#666666] mt-1 pl-0.5">
                  Borrower must be at least 18 years old to apply for a loan, or 19 years old if borrower reside in the state of Alabama.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Personal Phone Number
                </label>
                <input
                  type="tel"
                  name="borrower_phone"
                  defaultValue="+1 "
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Personal Email
                </label>
                <input
                  type="email"
                  name="borrower_email"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Social Security Number (SSN) *
                </label>
                <input
                  type="password"
                  name="borrower_ssn"
                  placeholder="XXX-XX-XXXX"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
            </div>

            {/* Financial Information */}
            <h3 className="text-lg font-semibold border-b border-[#e5e7eb] pb-2 mb-5 mt-9 text-[#111111]">
              Financial Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Personal Income (Annual)
                </label>
                <input
                  type="text"
                  name="personal_annual_income"
                  placeholder="$"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#666666] mt-1 pl-0.5">
                  Input the total annual income received from any personal W2 wages
                </p>
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Liquid Assets
                </label>
                <input
                  type="text"
                  name="liquid_assets"
                  placeholder="$"
                  required
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#666666] mt-1 pl-0.5">
                  Add the total amount of assets such as 401k, investment accounts, etc.
                </p>
              </div>
            </div>

            {/* Business Information */}
            <h3 className="text-lg font-semibold border-b border-[#e5e7eb] pb-2 mb-5 mt-9 text-[#111111]">
              Business Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Entity Type
                </label>
                <select
                  name="business_entity_type"
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%23666666' d='M0 0l5 5 5-5z'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 15px center'
                  }}
                >
                  <option value="" disabled>Select</option>
                  <option value="LLC">LLC</option>
                  <option value="S-Corp">S-Corp</option>
                  <option value="C-Corp">C-Corp</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Business Ownership %
                </label>
                <input
                  type="number"
                  name="business_ownership_percent"
                  min={0}
                  max={100}
                  placeholder="%"
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Total Monthly Business Revenue
                </label>
                <input
                  type="text"
                  name="monthly_business_revenue"
                  placeholder="$"
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Tax ID / EIN
                </label>
                <input
                  type="text"
                  name="business_ein"
                  placeholder="XX-XXXXXXX"
                  className="w-full py-3.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#444444] whitespace-nowrap">
                  Upload Business Bank Statements (PDF Only) *
                </label>
                <input
                  type="file"
                  name="business_bank_statements"
                  accept=".pdf"
                  multiple
                  className="w-full py-2.5 px-3 border border-[#b0b0b0] rounded-md text-base outline-none bg-transparent text-black focus:border-[#0070f3] focus:border-2 focus:py-2 focus:px-[11px]"
                />
                <p className="text-xs text-[#666666] mt-1 pl-0.5">
                  Please provide the last 4 months of statements in PDF format.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="col-span-12 bg-[#0070f3] text-white border-none rounded-md py-4 text-base font-semibold cursor-pointer mt-8 transition-colors hover:bg-[#0056b3] disabled:bg-[#cccccc] disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Encrypting & Transmitting to Office Vault..." : "Submit Application Securely"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
