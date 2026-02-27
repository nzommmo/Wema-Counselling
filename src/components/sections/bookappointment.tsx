"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faCheckCircle,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPhone,
  faClock,
  faStickyNote,
  faSpinner,
  faXmark,
  faVideo,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import api from "../../../axiosinstance";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id: number;
  title: string;
  description: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
}

interface FormState {
  service: string;
  name: string;
  email: string;
  phone: string;
  session_format: string;
  preferred_date: string;
  preferred_time: string;
  concerns: string;
  is_anonymous: boolean;
}

interface FormErrors extends Partial<Record<keyof FormState, string>> {
  general?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00", "11:30",
  "13:00", "14:00", "14:30", "15:00", "16:00", "17:00",
];

const STEPS = ["Service", "Details", "Schedule", "Confirm"];

const INITIAL_FORM: FormState = {
  service: "",
  name: "",
  email: "",
  phone: "",
  session_format: "",
  preferred_date: "",
  preferred_time: "",
  concerns: "",
  is_anonymous: false,
};

// ─── Step Indicator ───────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  done
                    ? "bg-pink-600 text-white"
                    : active
                    ? "bg-white border-2 border-pink-600 text-pink-600"
                    : "bg-gray-100 dark:bg-surface-800 text-gray-400 dark:text-gray-500"
                }`}
              >
                {done ? (
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-[10px] font-medium hidden sm:block ${
                  active ? "text-pink-600" : done ? "text-pink-400" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-10 sm:w-16 h-0.5 mb-4 transition-all duration-500 ${
                  done ? "bg-pink-600" : "bg-gray-200 dark:bg-surface-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Service Selection ────────────────────────────────────────────────

function ServiceStep({
  services,
  loading,
  selected,
  onSelect,
}: {
  services: Service[];
  loading: boolean;
  selected: string;
  onSelect: (title: string) => void;
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 rounded-2xl bg-gray-100 dark:bg-surface-800 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => onSelect(s.title)}
          className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
            selected === s.title
              ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30"
              : "border-gray-200 dark:border-surface-700 hover:border-pink-300 dark:hover:border-pink-800 bg-white dark:bg-surface-900"
          }`}
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
              {s.title}
            </p>
            {selected === s.title && (
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
            {s.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
              {s.duration_minutes} min
            </span>
            <span className="text-pink-600 font-semibold">
              KES {s.price.toLocaleString()}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({
  icon,
  label,
  error,
  children,
}: {
  icon: IconDefinition;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        <FontAwesomeIcon icon={icon} className="w-3 h-3 text-pink-500" />
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-surface-700 bg-white dark:bg-surface-900 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all duration-200";

// ─── Step 2: Personal Details ─────────────────────────────────────────────────

function DetailsStep({
  form,
  errors,
  onChange,
}: {
  form: FormState;
  errors: FormErrors;
  onChange: (field: keyof FormState, value: string | boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-surface-700 bg-gray-50 dark:bg-surface-900">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Book anonymously</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Your name won't be shared</p>
        </div>
        <button
          type="button"
          onClick={() => onChange("is_anonymous", !form.is_anonymous)}
          className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
            form.is_anonymous ? "bg-pink-600" : "bg-gray-300 dark:bg-surface-600"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
              form.is_anonymous ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field icon={faUser} label="Full Name" error={errors.name}>
          <input
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            disabled={form.is_anonymous}
            onChange={(e) => onChange("name", e.target.value)}
            className={`${inputClass} ${form.is_anonymous ? "opacity-40 cursor-not-allowed" : ""}`}
          />
        </Field>
        <Field icon={faPhone} label="Phone" error={errors.phone}>
          <input
            type="tel"
            placeholder="+254 7XX XXX XXX"
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <Field icon={faEnvelope} label="Email" error={errors.email}>
        <input
          type="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={inputClass}
        />
      </Field>
    </div>
  );
}

// ─── Step 3: Schedule ─────────────────────────────────────────────────────────

function ScheduleStep({
  form,
  errors,
  onChange,
}: {
  form: FormState;
  errors: FormErrors;
  onChange: (field: keyof FormState, value: string) => void;
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          Session Format
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { value: "online", label: "Online", icon: faVideo },
              { value: "in-person", label: "In-Person", icon: faLocationDot },
            ] as { value: string; label: string; icon: IconDefinition }[]
          ).map(({ value, label, icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => onChange("session_format", value)}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                form.session_format === value
                  ? "border-pink-500 bg-pink-50 dark:bg-pink-950/30 text-pink-600"
                  : "border-gray-200 dark:border-surface-700 text-gray-600 dark:text-gray-400 hover:border-pink-300 bg-white dark:bg-surface-900"
              }`}
            >
              <FontAwesomeIcon icon={icon} className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
        {errors.session_format && (
          <p className="text-xs text-rose-500">{errors.session_format}</p>
        )}
      </div>

      <Field icon={faCalendarAlt} label="Preferred Date" error={errors.preferred_date}>
        <input
          type="date"
          min={today}
          value={form.preferred_date}
          onChange={(e) => onChange("preferred_date", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field icon={faClock} label="Preferred Time" error={errors.preferred_time}>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onChange("preferred_time", slot)}
              className={`py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border-2 ${
                form.preferred_time === slot
                  ? "bg-pink-600 border-pink-600 text-white shadow-md shadow-pink-500/20"
                  : "bg-white dark:bg-surface-900 border-gray-200 dark:border-surface-700 text-gray-600 dark:text-gray-400 hover:border-pink-300"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </Field>

      <Field icon={faStickyNote} label="Concerns (optional)">
        <textarea
          rows={3}
          placeholder="Briefly describe what you'd like to work on…"
          value={form.concerns}
          onChange={(e) => onChange("concerns", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </Field>
    </div>
  );
}

// ─── Step 4: Confirm ──────────────────────────────────────────────────────────

function ConfirmStep({ form }: { form: FormState }) {
  const rows: { label: string; value: string }[] = [
    { label: "Service", value: form.service },
    { label: "Name", value: form.is_anonymous ? "Anonymous" : form.name },
    { label: "Email", value: form.email },
    { label: "Phone", value: form.phone },
    { label: "Format", value: form.session_format === "online" ? "Online" : "In-Person" },
    { label: "Date", value: form.preferred_date },
    { label: "Time", value: form.preferred_time },
    ...(form.concerns ? [{ label: "Concerns", value: form.concerns }] : []),
  ];

  return (
    <div className="bg-pink-50 dark:bg-pink-950/20 rounded-2xl p-5 border border-pink-100 dark:border-pink-900/40">
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Please review your booking details:
      </p>
      <dl className="space-y-3">
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between gap-4 text-sm border-b border-pink-100 dark:border-pink-900/30 pb-2 last:border-0 last:pb-0"
          >
            <dt className="text-gray-500 dark:text-gray-400 shrink-0">{label}</dt>
            <dd className="text-gray-900 dark:text-white font-medium text-right">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({ onReset, onClose }: { onReset: () => void; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-8 gap-5">
      <div className="w-20 h-20 rounded-full bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center">
        <FontAwesomeIcon icon={faCheckCircle} className="w-10 h-10 text-pink-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Booking Received!
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
          Thank you for reaching out. We've received your appointment request
          and will be in touch shortly to confirm your session.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-pink-600 hover:text-pink-700 font-semibold underline underline-offset-4"
        >
          Book another
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 font-semibold underline underline-offset-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface BookAppointmentProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function BookAppointment({ isOpen, onClose, preselectedService = "" }: BookAppointmentProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({ ...INITIAL_FORM, service: preselectedService });
  const [errors, setErrors] = useState<FormErrors>({});
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync preselectedService when it changes
  useEffect(() => {
    setForm((prev) => ({ ...prev, service: preselectedService }));
  }, [preselectedService]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch services once
  useEffect(() => {
    api
      .get<{ data: Service[] }>("counselling/services")
      .then((res) => setServices(res.data.data.filter((s: Service) => s.is_active)))
      .catch(console.error)
      .finally(() => setLoadingServices(false));
  }, []);

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (step === 0 && !form.service) e.service = "Please select a service";
    if (step === 1) {
      if (!form.is_anonymous && !form.name.trim()) e.name = "Required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
      if (!form.phone.trim()) e.phone = "Required";
    }
    if (step === 2) {
      if (!form.session_format) e.session_format = "Please choose a format";
      if (!form.preferred_date) e.preferred_date = "Please pick a date";
      if (!form.preferred_time) e.preferred_time = "Please pick a time";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => s + 1); };
  const back = () => { setErrors({}); setStep((s) => s - 1); };

  const submit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      await api.post("counselling/appointments", {
        service: form.service,
        name: form.is_anonymous ? "Anonymous" : form.name,
        email: form.email,
        phone: form.phone,
        session_format: form.session_format,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        concerns: form.concerns || undefined,
        is_anonymous: form.is_anonymous,
      });
      setSuccess(true);
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      const msg = error?.response?.data?.message ?? "Something went wrong. Please try again.";
      setErrors({ general: msg });
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm({ ...INITIAL_FORM, service: preselectedService });
    setErrors({});
    setStep(0);
    setSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          {/* Modal panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-surface-950 rounded-3xl shadow-2xl shadow-pink-500/10 pointer-events-auto"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-surface-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-surface-700 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-6 sm:px-8 pt-8 pb-2 text-center">
                <p className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-2">
                  Book a Session
                </p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Schedule your appointment
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Choose a service, share your details, and pick a time that works for you.
                </p>
              </div>

              {/* Form body */}
              <div className="px-6 sm:px-8 pb-8 pt-6">
                {success ? (
                  <SuccessScreen onReset={reset} onClose={handleClose} />
                ) : (
                  <>
                    <StepIndicator current={step} />

                    <div className="min-h-[260px]">
                      {step === 0 && (
                        <ServiceStep
                          services={services}
                          loading={loadingServices}
                          selected={form.service}
                          onSelect={(title) => update("service", title)}
                        />
                      )}
                      {step === 1 && (
                        <DetailsStep form={form} errors={errors} onChange={update} />
                      )}
                      {step === 2 && (
                        <ScheduleStep form={form} errors={errors} onChange={(f, v) => update(f, v)} />
                      )}
                      {step === 3 && <ConfirmStep form={form} />}
                    </div>

                    {errors.general && (
                      <p className="mt-4 text-sm text-rose-500 text-center">{errors.general}</p>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-surface-700">
                      <button
                        type="button"
                        onClick={back}
                        disabled={step === 0}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
                        Back
                      </button>

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={next}
                          className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md shadow-pink-500/25"
                        >
                          Continue
                          <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={submit}
                          disabled={submitting}
                          className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-pink-500/25"
                        >
                          {submitting ? (
                            <>
                              <FontAwesomeIcon icon={faSpinner} className="w-3.5 h-3.5 animate-spin" />
                              Booking…
                            </>
                          ) : (
                            <>
                              Confirm Booking
                              <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}