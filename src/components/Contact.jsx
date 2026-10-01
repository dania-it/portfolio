import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),

  email: z.string().trim().email("Please enter a valid email address."),

  subject: z.string().trim().optional(),

  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );

    const subject = encodeURIComponent(form.subject || "Portfolio contact");

    window.location.href = `mailto:daniaibesh513@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-secondary">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            Let's <span className="text-gradient">connect</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Have a project in mind, a junior opportunity, or simply want to say
            hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-surface
              p-7
              sm:p-8
            "
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
              Get in touch
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-text">
              Let's talk
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Whether it's a junior front-end role, a freelance project, or a
              question about my work, feel free to reach out.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:daniaibesh513@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-border
                  bg-surface-soft
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/40
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                  "
                >
                  <i className="fa-regular fa-envelope" />
                </span>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-text transition-colors group-hover:text-secondary">
                    daniaibesh513@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+963931800239"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-border
                  bg-surface-soft
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/40
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                  "
                >
                  <i className="fa-solid fa-phone" />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-text transition-colors group-hover:text-secondary">
                    +963 93 180 0239
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-border
                  bg-surface-soft
                  p-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                  "
                >
                  <i className="fa-solid fa-location-dot" />
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Based in
                  </p>

                  <p className="mt-1 text-sm text-text">Damascus, Syria</p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/dania-it"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-border
                  bg-surface-soft
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/40
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                  "
                >
                  <i className="fa-brands fa-github" />
                </span>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    GitHub
                  </p>

                  <p className="mt-1 truncate text-sm text-text transition-colors group-hover:text-secondary">
                    github.com/dania-it
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="
              rounded-2xl
              border
              border-border
              bg-surface
              p-7
              sm:p-8
            "
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
                Message
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-text">
                Send me a message
              </h3>
            </div>

            <div className="mt-7 grid gap-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-muted"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-surface-soft
                      px-4
                      py-3
                      text-sm
                      text-text
                      placeholder:text-muted
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-primary/10
                      ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }
                    `}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-muted"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-surface-soft
                      px-4
                      py-3
                      text-sm
                      text-text
                      placeholder:text-muted
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-primary/10
                      ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      }
                    `}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-muted"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-border
                    bg-surface-soft
                    px-4
                    py-3
                    text-sm
                    text-text
                    placeholder:text-muted
                    outline-none
                    transition-all
                    duration-300
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/10
                  "
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-muted"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={6}
                  className={`
                    w-full
                    resize-none
                    rounded-xl
                    border
                    bg-surface-soft
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-text
                    placeholder:text-muted
                    outline-none
                    transition-all
                    duration-300
                    focus:ring-2
                    focus:ring-primary/10
                    ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    }
                  `}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-brand
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-primary/20
                "
              >
                <span>Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
