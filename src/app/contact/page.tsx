"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import SiteFooter from "../../components/SiteFooter";
import PageHero from "../../components/sections/PageHero";

type FormData = {
  fullName: string;
  corporateEmail: string;
  company: string;
  jobTitle: string;
  phone: string;
  projectBrief: string;
  budget: string;
  timeline: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: "",
  corporateEmail: "",
  company: "",
  jobTitle: "",
  phone: "",
  projectBrief: "",
  budget: "",
  timeline: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.corporateEmail.trim()) {
    errors.corporateEmail = "Work email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.corporateEmail)) {
    errors.corporateEmail = "Please enter a valid email address";
  }

  if (!data.company.trim()) {
    errors.company = "Company name is required";
  }

  if (!data.jobTitle.trim()) {
    errors.jobTitle = "Job title is required";
  }

  if (!data.projectBrief.trim()) {
    errors.projectBrief = "Project brief is required";
  } else if (data.projectBrief.trim().length < 50) {
    errors.projectBrief = "Please provide at least 50 characters describing your project";
  }

  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const id = `NXV-${Date.now().toString(36).toUpperCase()}`;
    setReferenceId(id);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setReferenceId("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero
          label="Get in touch"
          title={
            <>
              Contact <span className="gradient-text">Nexvora</span>
            </>
          }
          description="Tell us about your project. We typically respond within one business day with an honest assessment — no auto-reply fluff."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              <aside className="lg:col-span-2">
                <div className="sticky top-28 space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Get in touch
                    </h2>
                    <p className="mt-2 text-slate-600">
                      Whether you&apos;re a startup or a scaling business, our team is
                      ready to help you build reliable software that fits your budget
                      and timeline.
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "contact@nexvora-solutions.com",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+880 2-555-0199",
                      },
                      {
                        icon: Building2,
                        label: "Office",
                        value:
                          "House 113, Road 3, Block F, Banani, Dhaka 1213, Bangladesh",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <li key={item.label} className="flex gap-3">
                          <div className="icon-badge h-10 w-10 shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">
                              {item.label}
                            </p>
                            <p className="whitespace-pre-line text-sm text-slate-600">
                              {item.value}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              <div className="lg:col-span-3">
                {isSubmitted ? (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-slate-900">
                      Project Brief Received
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-slate-600">
                      Thank you, {formData.fullName.split(" ")[0]}. Your inquiry has
                      been received by our team. A project lead will contact you at{" "}
                      <span className="font-medium text-slate-900">
                        {formData.corporateEmail}
                      </span>{" "}
                      within one business day.
                    </p>
                    <div className="mt-6 inline-block rounded-lg border border-green-200 bg-white px-6 py-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Reference ID
                      </p>
                      <p className="mt-1 font-mono text-lg font-bold text-indigo-700">
                        {referenceId}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:scale-[1.01] hover:bg-slate-50 active:scale-[0.99]"
                      >
                        Submit Another Brief
                      </button>
                      <Link href="/services" className="btn-primary px-6 py-3">
                        Explore Our Services
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="card p-6 sm:p-8"
                    noValidate
                  >
                    <div className="mb-8 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">
                          Project Brief Form
                        </h2>
                        <p className="text-sm text-slate-500">
                          All fields marked with * are required
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                              errors.fullName
                                ? "border-red-300 focus:border-red-400"
                                : "border-slate-300 focus:border-indigo-400"
                            }`}
                            placeholder="Jane Smith"
                          />
                        </div>
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="corporateEmail"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="corporateEmail"
                            type="email"
                            value={formData.corporateEmail}
                            onChange={(e) =>
                              handleChange("corporateEmail", e.target.value)
                            }
                            className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                              errors.corporateEmail
                                ? "border-red-300 focus:border-red-400"
                                : "border-slate-300 focus:border-indigo-400"
                            }`}
                            placeholder="you@company.com"
                          />
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          Any valid email works — we reply to the address you provide
                        </p>
                        {errors.corporateEmail && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.corporateEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Company *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className={`w-full rounded-lg border bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                              errors.company
                                ? "border-red-300 focus:border-red-400"
                                : "border-slate-300 focus:border-indigo-400"
                            }`}
                            placeholder="Acme Corporation"
                          />
                        </div>
                        {errors.company && (
                          <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Job Title *
                        </label>
                        <input
                          id="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) => handleChange("jobTitle", e.target.value)}
                          className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                            errors.jobTitle
                              ? "border-red-300 focus:border-red-400"
                              : "border-slate-300 focus:border-indigo-400"
                          }`}
                          placeholder="VP of Engineering"
                        />
                        {errors.jobTitle && (
                          <p className="mt-1 text-xs text-red-600">{errors.jobTitle}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                            placeholder="+880 2-555-0199"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleChange("budget", e.target.value)}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        >
                          <option value="">Select range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 – $15,000</option>
                          <option value="15k-50k">$15,000 – $50,000</option>
                          <option value="50k-100k">$50,000 – $100,000</option>
                          <option value="100k-plus">$100,000+</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="timeline"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => handleChange("timeline", e.target.value)}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (within 30 days)</option>
                          <option value="1-3months">1 – 3 months</option>
                          <option value="3-6months">3 – 6 months</option>
                          <option value="6-12months">6 – 12 months</option>
                          <option value="planning">Exploratory / planning phase</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="projectBrief"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Project Brief *
                        </label>
                        <textarea
                          id="projectBrief"
                          rows={6}
                          value={formData.projectBrief}
                          onChange={(e) =>
                            handleChange("projectBrief", e.target.value)
                          }
                          className={`w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                            errors.projectBrief
                              ? "border-red-300 focus:border-red-400"
                              : "border-slate-300 focus:border-indigo-400"
                          }`}
                          placeholder="Describe your project objectives, current challenges, technical requirements, integration needs, and success criteria..."
                        />
                        <div className="mt-1 flex items-center justify-between">
                          {errors.projectBrief ? (
                            <p className="text-xs text-red-600">
                              {errors.projectBrief}
                            </p>
                          ) : (
                            <span />
                          )}
                          <p className="text-xs text-slate-400">
                            {formData.projectBrief.length} characters
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary mt-8 w-full px-8 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Submitting Brief...
                        </>
                      ) : (
                        <>
                          Submit Project Brief
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
