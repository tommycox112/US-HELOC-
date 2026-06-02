"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Building2,
  Home,
  DollarSign,
  FileText,
  Shield,
  Clock,
  Phone,
  Upload,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Business Info", icon: Building2 },
  { id: 3, title: "Property", icon: Home },
  { id: 4, title: "Loan Details", icon: DollarSign },
  { id: 5, title: "Documents", icon: FileText },
  { id: 6, title: "Review", icon: CheckCircle2 },
]

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
]

const loanPurposes = [
  "Home Improvement",
  "Debt Consolidation",
  "Business Expansion",
  "Real Estate Investment",
  "Emergency Expenses",
  "Education",
  "Other"
]

const propertyTypes = [
  "Single Family Home",
  "Multi-Family (2-4 units)",
  "Condominium",
  "Townhouse",
  "Investment Property",
  "Mixed Use"
]

const employmentTypes = [
  "Self-Employed",
  "Business Owner",
  "W-2 Employee",
  "Contractor/Freelancer",
  "Retired"
]

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    ssn: "",
    
    // Business Info
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    employmentType: "",
    annualPersonalIncome: "",
    monthlyBusinessIncome: "",
    
    // Property Info
    propertyAddress: "",
    propertyAddress2: "",
    propertyCity: "",
    propertyState: "",
    propertyZip: "",
    propertyType: "",
    estimatedValue: "",
    currentMortgageBalance: "",
    
    // Loan Details
    loanAmount: "",
    loanPurpose: "",
    additionalInfo: "",
    
    // Agreements
    agreeTerms: false,
    agreeCredit: false,
    agreeMarketing: false,
  })

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setUploadedFiles(prev => [...prev, ...Array.from(files)])
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = () => {
    window.location.href = "https://form.jotform.com/260386483883066"
  }

  const progress = (currentStep / 6) * 100

  if (isSubmitted) {
    return (
      <div className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868]" />
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#002868] mb-4">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Thank you for applying with US HELOC. Our team will review your application 
                and contact you within 24-48 hours.
              </p>
              <div className="bg-[#002868]/5 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-[#002868] mb-4">What happens next?</h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#BF0A30] text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>Our team reviews your application (within 24 hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#BF0A30] text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>A loan specialist will call to discuss your options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#BF0A30] text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Get approved and access your funds in as few as 5 days</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-[#002868] text-[#002868] bg-transparent hover:bg-[#002868]/5"
                  onClick={() => window.location.href = "/"}
                >
                  Back to Home
                </Button>
                <Button className="bg-[#BF0A30] hover:bg-[#8B0000] text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us: (800) 555-HELOC
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#002868]/10 px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 text-[#002868]" />
            <span className="text-sm font-medium text-[#002868]">5-Minute Application</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
            Home Equity Line of Credit Application
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Apply for a home equity line of credit as a business owner. 
            Please provide your information to get started with competitive rates.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="hidden md:flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = currentStep > step.id
              const isCurrent = currentStep === step.id
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                          ? "bg-[#BF0A30] text-white shadow-lg shadow-[#BF0A30]/30"
                          : "bg-gray-100 text-gray-400"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-xs mt-2 font-medium",
                        isCurrent ? "text-[#002868]" : "text-gray-400"
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-1 w-12 lg:w-20 mx-2 rounded-full transition-colors duration-300",
                        isCompleted ? "bg-green-500" : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              )
            })}
          </div>
          
          {/* Mobile Progress */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#002868]">
                Step {currentStep} of 6: {steps[currentStep - 1].title}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Form Card */}
        <Card className="border-0 shadow-2xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-[#002868] via-[#BF0A30] to-[#002868]" />
          
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Please provide your basic contact information to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-gray-700">
                      Date of Birth <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ssn" className="text-gray-700">
                      Social Security Number <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="ssn"
                      type="password"
                      placeholder="XXX-XX-XXXX"
                      value={formData.ssn}
                      onChange={(e) => updateFormData("ssn", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Encrypted and secure. Required for credit check.
                    </p>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <Building2 className="h-5 w-5" />
                  </div>
                  Business Information
                </CardTitle>
                <CardDescription>
                  Tell us about your business and income sources.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-gray-700">
                    Business Name <span className="text-[#BF0A30]">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="Acme Corporation"
                    value={formData.businessName}
                    onChange={(e) => updateFormData("businessName", e.target.value)}
                    className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employmentType" className="text-gray-700">
                      Employment Type <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Select
                      value={formData.employmentType}
                      onValueChange={(value) => updateFormData("employmentType", value)}
                    >
                      <SelectTrigger className="h-12 border-gray-200">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {employmentTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness" className="text-gray-700">
                      Years in Business <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Select
                      value={formData.yearsInBusiness}
                      onValueChange={(value) => updateFormData("yearsInBusiness", value)}
                    >
                      <SelectTrigger className="h-12 border-gray-200">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="annualPersonalIncome" className="text-gray-700">
                      Annual Personal Income <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="annualPersonalIncome"
                        type="number"
                        placeholder="150,000"
                        value={formData.annualPersonalIncome}
                        onChange={(e) => updateFormData("annualPersonalIncome", e.target.value)}
                        className="h-12 pl-10 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBusinessIncome" className="text-gray-700">
                      Average Monthly Business Income <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="monthlyBusinessIncome"
                        type="number"
                        placeholder="25,000"
                        value={formData.monthlyBusinessIncome}
                        onChange={(e) => updateFormData("monthlyBusinessIncome", e.target.value)}
                        className="h-12 pl-10 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Property Information */}
          {currentStep === 3 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <Home className="h-5 w-5" />
                  </div>
                  Property Information
                </CardTitle>
                <CardDescription>
                  Provide details about the property you are using as collateral.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyAddress" className="text-gray-700">
                    Street Address <span className="text-[#BF0A30]">*</span>
                  </Label>
                  <Input
                    id="propertyAddress"
                    placeholder="123 Main Street"
                    value={formData.propertyAddress}
                    onChange={(e) => updateFormData("propertyAddress", e.target.value)}
                    className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyAddress2" className="text-gray-700">
                    Address Line 2 (Optional)
                  </Label>
                  <Input
                    id="propertyAddress2"
                    placeholder="Apt, Suite, Unit, etc."
                    value={formData.propertyAddress2}
                    onChange={(e) => updateFormData("propertyAddress2", e.target.value)}
                    className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2 md:col-span-1 space-y-2">
                    <Label htmlFor="propertyCity" className="text-gray-700">
                      City <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="propertyCity"
                      placeholder="New York"
                      value={formData.propertyCity}
                      onChange={(e) => updateFormData("propertyCity", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyState" className="text-gray-700">
                      State <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Select
                      value={formData.propertyState}
                      onValueChange={(value) => updateFormData("propertyState", value)}
                    >
                      <SelectTrigger className="h-12 border-gray-200">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {usStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyZip" className="text-gray-700">
                      ZIP Code <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <Input
                      id="propertyZip"
                      placeholder="10001"
                      value={formData.propertyZip}
                      onChange={(e) => updateFormData("propertyZip", e.target.value)}
                      className="h-12 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">
                    Property Type <span className="text-[#BF0A30]">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) => updateFormData("propertyType", value)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {propertyTypes.map((type) => (
                      <Label
                        key={type}
                        htmlFor={type}
                        className={cn(
                          "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all",
                          formData.propertyType === type
                            ? "border-[#002868] bg-[#002868]/5"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <RadioGroupItem value={type} id={type} />
                        <span className="text-sm">{type}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="estimatedValue" className="text-gray-700">
                      Estimated Property Value <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="estimatedValue"
                        type="number"
                        placeholder="500,000"
                        value={formData.estimatedValue}
                        onChange={(e) => updateFormData("estimatedValue", e.target.value)}
                        className="h-12 pl-10 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentMortgageBalance" className="text-gray-700">
                      Current Mortgage Balance <span className="text-[#BF0A30]">*</span>
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="currentMortgageBalance"
                        type="number"
                        placeholder="300,000"
                        value={formData.currentMortgageBalance}
                        onChange={(e) => updateFormData("currentMortgageBalance", e.target.value)}
                        className="h-12 pl-10 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 4: Loan Details */}
          {currentStep === 4 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  Loan Details
                </CardTitle>
                <CardDescription>
                  Tell us about your borrowing needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="loanAmount" className="text-gray-700">
                    Desired Loan Amount <span className="text-[#BF0A30]">*</span>
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="100,000"
                      value={formData.loanAmount}
                      onChange={(e) => updateFormData("loanAmount", e.target.value)}
                      className="h-12 pl-10 border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Based on your property value, you may qualify for up to 80% of your home equity.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">
                    Primary Purpose of Loan <span className="text-[#BF0A30]">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.loanPurpose}
                    onValueChange={(value) => updateFormData("loanPurpose", value)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {loanPurposes.map((purpose) => (
                      <Label
                        key={purpose}
                        htmlFor={`purpose-${purpose}`}
                        className={cn(
                          "flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all",
                          formData.loanPurpose === purpose
                            ? "border-[#002868] bg-[#002868]/5"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <RadioGroupItem value={purpose} id={`purpose-${purpose}`} />
                        <span className="text-sm">{purpose}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-gray-700">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Tell us more about your financial goals or any special circumstances..."
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                    className="min-h-[120px] border-gray-200 focus:border-[#002868] focus:ring-[#002868]"
                  />
                </div>

                {/* Equity Calculator Preview */}
                {formData.estimatedValue && formData.currentMortgageBalance && (
                  <div className="bg-gradient-to-r from-[#002868]/10 to-[#BF0A30]/10 rounded-xl p-6">
                    <h4 className="font-semibold text-[#002868] mb-4">Estimated Equity Available</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Property Value</p>
                        <p className="text-xl font-bold text-[#002868]">
                          ${Number(formData.estimatedValue).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Mortgage Balance</p>
                        <p className="text-xl font-bold text-gray-700">
                          ${Number(formData.currentMortgageBalance).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Available Equity</p>
                        <p className="text-xl font-bold text-green-600">
                          ${(Number(formData.estimatedValue) * 0.8 - Number(formData.currentMortgageBalance)).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </>
          )}

          {/* Step 5: Documents */}
          {currentStep === 5 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  Supporting Documents
                </CardTitle>
                <CardDescription>
                  Upload any supporting documents to speed up your application (optional).
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#002868]/50 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Upload Business Bank Statements
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    PDF, JPG, or PNG files. Max 10MB each.
                  </p>
                  <label className="cursor-pointer">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button type="button" variant="outline" className="border-[#002868] text-[#002868] bg-transparent hover:bg-[#002868]/5">
                      Choose Files
                    </Button>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-700">Uploaded Files</h4>
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-[#002868]" />
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFile(index)}
                          className="h-8 w-8 text-gray-400 hover:text-[#BF0A30]"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h4 className="font-medium text-[#002868] mb-2">Helpful Documents Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>- Last 3 months of bank statements</li>
                    <li>- Recent tax returns (if available)</li>
                    <li>- Proof of business ownership</li>
                    <li>- Current mortgage statement</li>
                  </ul>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 6: Review & Submit */}
          {currentStep === 6 && (
            <>
              <CardHeader className="bg-gradient-to-r from-[#002868]/5 to-transparent border-b">
                <CardTitle className="flex items-center gap-3 text-[#002868]">
                  <div className="w-10 h-10 rounded-full bg-[#002868] text-white flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  Review Your Application
                </CardTitle>
                <CardDescription>
                  Please review your information before submitting.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-[#002868] mb-3 flex items-center gap-2">
                      <User className="h-4 w-4" /> Personal Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Name:</span> {formData.firstName} {formData.lastName}</p>
                      <p><span className="text-gray-500">Email:</span> {formData.email}</p>
                      <p><span className="text-gray-500">Phone:</span> {formData.phone}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-[#002868] mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4" /> Business Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Business:</span> {formData.businessName}</p>
                      <p><span className="text-gray-500">Annual Income:</span> ${Number(formData.annualPersonalIncome).toLocaleString()}</p>
                      <p><span className="text-gray-500">Monthly Business:</span> ${Number(formData.monthlyBusinessIncome).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-[#002868] mb-3 flex items-center gap-2">
                      <Home className="h-4 w-4" /> Property Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Address:</span> {formData.propertyAddress}, {formData.propertyCity}, {formData.propertyState} {formData.propertyZip}</p>
                      <p><span className="text-gray-500">Type:</span> {formData.propertyType}</p>
                      <p><span className="text-gray-500">Value:</span> ${Number(formData.estimatedValue).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-[#002868] mb-3 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Loan Request
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Amount:</span> ${Number(formData.loanAmount).toLocaleString()}</p>
                      <p><span className="text-gray-500">Purpose:</span> {formData.loanPurpose}</p>
                      <p><span className="text-gray-500">Documents:</span> {uploadedFiles.length} file(s) uploaded</p>
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => updateFormData("agreeTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <a href="#" className="text-[#002868] underline">Terms of Service</a>
                      {" "}and{" "}
                      <a href="#" className="text-[#002868] underline">Privacy Policy</a>.
                      <span className="text-[#BF0A30]">*</span>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="agreeCredit"
                      checked={formData.agreeCredit}
                      onCheckedChange={(checked) => updateFormData("agreeCredit", checked as boolean)}
                    />
                    <Label htmlFor="agreeCredit" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      I authorize US HELOC to obtain my credit report to evaluate my application.
                      <span className="text-[#BF0A30]">*</span>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => updateFormData("agreeMarketing", checked as boolean)}
                    />
                    <Label htmlFor="agreeMarketing" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      I would like to receive updates about rates, promotions, and other offers via email.
                    </Label>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">Your Information is Secure</h4>
                    <p className="text-sm text-green-700">
                      We use bank-level 256-bit SSL encryption to protect your data. 
                      Your information is never shared without your consent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="px-6 md:px-8 pb-6 md:pb-8 flex flex-col sm:flex-row gap-4 justify-between">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="h-12 px-6 border-gray-200 bg-transparent hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 6 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="h-12 px-8 bg-[#BF0A30] hover:bg-[#8B0000] text-white"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.agreeTerms || !formData.agreeCredit}
                className="h-12 px-8 bg-[#BF0A30] hover:bg-[#8B0000] text-white disabled:opacity-50"
              >
                Submit Application
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span>256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span>NMLS #123456</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#002868]" />
            <span>5-Day Funding</span>
          </div>
        </div>
      </div>
    </div>
  )
}
