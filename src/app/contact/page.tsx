import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a
                    href="mailto:naiksoham267@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    naiksoham267@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <a
                    href="tel:+919325828760"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    +91 9325828760
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">
              Connect on Social Media
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/sohamnaik26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/sohamnaik_26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-pink-600 dark:text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="skype:sohamnaik26?chat"
                className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-blue-500 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zM6.55 16c-1.08 0-1.55-.52-1.55-1.3a1.08 1.08 0 011.16-1.06c1.05 0 1.2.65 1.87.65.57 0 .87-.32.87-.65 0-.64-.5-.81-1.32-1.04C6.5 12.3 5.25 12 5.25 10.35c0-1.22 1.03-1.95 2.64-1.95 1.3 0 2.13.47 2.13 1.22 0 .55-.5.74-1.1.74-.97 0-1.07-.5-1.76-.5-.31 0-.7.2-.7.56 0 .5.52.6 1.2.84 1.48.5 2.4 1.08 2.4 2.32 0 1.26-1.28 2.42-2.86 2.42H6.55zm10.5-2.42c0 .83-.33 1.7-1.28 1.7-.8 0-1.42-.8-1.42-1.55 0-.47.5-1.03.5-1.97 0-1.06-.67-1.5-1.34-1.5-.5 0-1.42.17-1.42 1.97v4.24c0 .47-.22.83-.7.83-.71 0-.77-.36-.77-.83V9.58c0-.8.18-1.33-1.1-1.33-.46 0-1.05.13-1.05.71 0 .35.18.45.56.6.56.25.83.77.83 1.26 0 .4-.18.72-.74.72-.48 0-.84-.47-.84-1.16 0-1.55 1.36-2.49 2.69-2.49.78 0 1.43.17 1.96.17 1.1 0 1.72-.35 2.69-.35 1.74 0 2.96 1.19 2.96 2.94 0 .77-.28 1.58-.28 2.14 0 .48.28.64.7.64.55 0 1.11-.5 1.11-1.28V9.07c0-1.53.57-3.07 1.4-3.07.55 0 .66.25.66.87v5.15c0 .6.27 1.56 1.27 1.56.65 0 1.29-.58 1.29-1.56V9.98c0-1.92-1.28-3.3-3.26-3.3-1.67 0-2.45.6-3.1 1.45l-.02-.01c-.62-.7-1.44-1.44-2.96-1.44-1.67 0-2.62.97-2.62 2.4 0 .94.55 1.46 1.72 1.46.75 0 1.4-.32 1.87-.87l.02.01c.08.48.12.64.12 1.2v2.49c0 1.92-.77 3.16-2.57 3.16-1.3 0-2.13-.87-2.13-2.15 0-.89.38-1.41 1.5-1.41.52 0 1.13.28 1.13.65 0 .6-.09 1.05-.9 1.05-.4 0-.45-.29-.51-.55-.15-.45-.3-.72-.67-.72-.39 0-.75.37-.75.91 0 .93.7 1.6 1.64 1.6 1.5 0 2.65-1.28 2.65-3.38v-2.2c1.1 1.02 2.05 1.52 3.32 1.52 1.42 0 2.97-.8 2.97-2.15z" />
                </svg>
                <span>Skype</span>
              </a>

              <a
                href="https://github.com/sohamnaik26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">
              Need Web Development Services?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm available for freelance projects and consulting. Feel free to
              reach out if you need help with:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
              <li>Website Development</li>
              <li>Web Application Development</li>
              <li>Frontend Development</li>
              <li>React/Next.js Projects</li>
              <li>Code Review & Optimization</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400">
              I'll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
