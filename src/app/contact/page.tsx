"use client";

import { useState, FormEvent } from "react";
import AnimatedCard from "@/components/ui/animated-card";
import SectionHeader from "@/components/ui/section-header";
import { contacts } from "@/data/contacts";
import api from "../../../axiosinstance";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setServerError(null);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await api.post("inquiries", {
          name: formState.fullName,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          site: "counselling",
        });
        setIsSubmitted(true);
        setFormState({ fullName: "", email: "", subject: "", message: "" });
      } catch (err: unknown) {
        const error = err as { response?: { data?: { message?: string } } };
        setServerError(
          error?.response?.data?.message ?? "Something went wrong. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <section className="pt-12 pb-20 bg-linear-to-b from-pink-50/50 to-white dark:from-surface-900 dark:to-surface-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="GET IN TOUCH"
            title="Contact Us"
            description="Any question or remarks? Just write us a message!"
          />

          <div className="grid lg:grid-cols-5 gap-10 mt-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedCard>
                <div className="bg-white dark:bg-surface-900 rounded-2xl shadow-sm border border-gray-100 dark:border-surface-700 p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white">
                          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={formState.fullName}
                          onChange={(e) =>
                            setFormState({ ...formState, fullName: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 ${
                            errors.fullName ? "border-red-400" : "border-gray-200 dark:border-surface-700"
                          }`}
                          placeholder="e.g. John Doe"
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 ${
                            errors.email ? "border-red-400" : "border-gray-200 dark:border-surface-700"
                          }`}
                          placeholder="e.g. john@gmail.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 ${
                            errors.subject ? "border-red-400" : "border-gray-200 dark:border-surface-700"
                          }`}
                          placeholder="e.g. Inquiry about services"
                        />
                        {errors.subject && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-surface-800 border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none ${
                            errors.message ? "border-red-400" : "border-gray-200 dark:border-surface-700"
                          }`}
                          placeholder="Type your message here..."
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>

                      {serverError && (
                        <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                          {serverError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 text-base font-semibold text-white bg-linear-to-r from-pink-600 to-rose-500 rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                              <path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2z" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedCard>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full">
              {contacts.map((contact, i) => (
                <AnimatedCard key={contact.name} delay={i * 100}>
                  <div className="bg-white dark:bg-surface-900 rounded-2xl shadow-sm border border-gray-100 dark:border-surface-700 p-8 hover:shadow-lg hover:border-pink-100 dark:hover:border-pink-900/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-lg">
                        {contact.name[0]}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {contact.name}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-pink-500 shrink-0">
                          <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-pink-500 shrink-0">
                          <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-pink-500 shrink-0">
                          <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{contact.location}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}

              {/* Map embedded */}
              <AnimatedCard delay={200} className="flex-1">
                <div className="bg-gray-100 dark:bg-surface-800 rounded-2xl h-full min-h-[400px] overflow-hidden border border-gray-200 dark:border-surface-700 relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Amani%20Counselling%20Centre%20and%20Training%20Institute%2C%20Raila%20Odinga%20Way%2C%20Nairobi&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}