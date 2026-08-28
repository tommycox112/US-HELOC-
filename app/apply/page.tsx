"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        alert('Thank you. Your inquiry has been submitted securely. A member of our team will follow up with you.');
        form.reset();
      } else {
        alert('We could not process your submission: ' + result.error);
      }
    } catch (error) {
      console.error('[v0] Inquiry submission error:', error);
      alert('We were unable to submit your inquiry right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F3EC]">
      <Header />
      <main className="flex-1 px-5 py-12">
        <div className="mx-auto mb-6 max-w-[700px]">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-[#28564A]">
            Explore My Options
          </p>
          <h1 className="mt-2 font-serif text-[40px] leading-[1.05] text-[#182C2A]">
            Start your inquiry
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#52616B]">
            Tell us about your property and goals. This is an informational inquiry, not a loan
            application or a commitment to lend. Your details are used to explore potential
            home-equity financing options.
          </p>
        </div>
        <div className="mx-auto max-w-[700px] rounded-2xl border border-[#DFE6E2] bg-white p-8 shadow-[0_10px_40px_rgba(24,44,42,0.06)] md:p-10">

          <form onSubmit={handleSubmit}>
            {/* Property Information */}
            <h3 className="text-lg font-semibold border-b border-[#DFE6E2] pb-2 mb-5 text-[#182C2A]">
              Property Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-8 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Property Address For Financing *
                </label>
                <input
                  type="text"
                  name="property_address"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Apt, Suite, Unit
                </label>
                <input
                  type="text"
                  name="property_unit"
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  City *
                </label>
                <input
                  type="text"
                  name="property_city"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-6 md:col-span-3 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  State *
                </label>
                <select
                  name="property_state"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Zipcode *
                </label>
                <input
                  type="text"
                  name="property_zip"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Ownership Type
                </label>
                <select
                  name="ownership_type"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Occupancy Type
                </label>
                <select
                  name="occupancy_type"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Is The Property Currently For Sale?
                </label>
                <select
                  name="is_for_sale"
                  required
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
            <h3 className="text-lg font-semibold border-b border-[#DFE6E2] pb-2 mb-5 mt-9 text-[#182C2A]">
              Borrower Information
            </h3>
            <p className="text-sm text-[#52616B] -mt-2.5 mb-5">
              For verification purposes, please provide the legal name of the borrower as it appears on their government-issued ID.
            </p>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-5 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Legal First Name
                </label>
                <input
                  type="text"
                  name="borrower_first_name"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-5 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Legal Last Name
                </label>
                <input
                  type="text"
                  name="borrower_last_name"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-2 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Suffix
                </label>
                <select
                  name="borrower_suffix"
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="borrower_dob"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#52616B] mt-1 pl-0.5">
                  Borrower must be at least 18 years old to apply for a loan, or 19 years old if borrower reside in the state of Alabama.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Personal Phone Number
                </label>
                <input
                  type="tel"
                  name="borrower_phone"
                  defaultValue="+1 "
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Personal Email
                </label>
                <input
                  type="email"
                  name="borrower_email"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Social Security Number (SSN) *
                </label>
                <input
                  type="password"
                  name="borrower_ssn"
                  placeholder="XXX-XX-XXXX"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
            </div>

            {/* Financial Information */}
            <h3 className="text-lg font-semibold border-b border-[#DFE6E2] pb-2 mb-5 mt-9 text-[#182C2A]">
              Financial Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Personal Income (Annual)
                </label>
                <input
                  type="text"
                  name="personal_annual_income"
                  placeholder="$"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#52616B] mt-1 pl-0.5">
                  Input the total annual income received from any personal W2 wages
                </p>
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Liquid Assets
                </label>
                <input
                  type="text"
                  name="liquid_assets"
                  placeholder="$"
                  required
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
                <p className="text-xs text-[#52616B] mt-1 pl-0.5">
                  Add the total amount of assets such as 401k, investment accounts, etc.
                </p>
              </div>
            </div>

            {/* Business Information */}
            <h3 className="text-lg font-semibold border-b border-[#DFE6E2] pb-2 mb-5 mt-9 text-[#182C2A]">
              Business Information
            </h3>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 md:col-span-6 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Entity Type
                </label>
                <select
                  name="business_entity_type"
                  defaultValue=""
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black appearance-none pr-9 focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
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
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Business Ownership %
                </label>
                <input
                  type="number"
                  name="business_ownership_percent"
                  min={0}
                  max={100}
                  placeholder="%"
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Total Monthly Business Revenue
                </label>
                <input
                  type="text"
                  name="monthly_business_revenue"
                  placeholder="$"
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Tax ID / EIN
                </label>
                <input
                  type="text"
                  name="business_ein"
                  placeholder="XX-XXXXXXX"
                  className="w-full py-3.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-[13px] focus:px-[11px]"
                />
              </div>
              <div className="col-span-12 relative mt-1">
                <label className="absolute left-3 -top-2 bg-white px-1.5 text-xs font-medium text-[#3E4A47] whitespace-nowrap">
                  Upload Business Bank Statements (PDF Only) *
                </label>
                <input
                  type="file"
                  name="business_bank_statements"
                  accept=".pdf"
                  multiple
                  className="w-full py-2.5 px-3 border border-[#C4CEC8] rounded-md text-base outline-none bg-transparent text-black focus:border-[#28564A] focus:border-2 focus:py-2 focus:px-[11px]"
                />
                <p className="text-xs text-[#52616B] mt-1 pl-0.5">
                  Please provide the last 4 months of statements in PDF format.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="col-span-12 mt-8 cursor-pointer rounded-lg border-none bg-[#28564A] py-4 text-base font-semibold text-white transition-colors hover:bg-[#1F483F] disabled:cursor-not-allowed disabled:bg-[#A9B5AF]"
              >
                {isSubmitting ? "Securely submitting your inquiry…" : "Submit My Inquiry"}
              </button>
              <p className="col-span-12 mt-1 text-center text-xs text-[#8A7C6A]">
                Submitting this form does not create a loan application or a commitment to lend.
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
