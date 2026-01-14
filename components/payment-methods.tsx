export function PaymentMethods() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground text-center">Formas de pagamento aceitas:</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Visa */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm">
          <svg viewBox="0 0 48 32" className="h-6" fill="none">
            <rect width="48" height="32" rx="4" fill="white" />
            <path
              d="M19.8 21.3h-2.9l1.8-11.3h2.9l-1.8 11.3zm8.6-11c-.6-.2-1.5-.4-2.6-.4-2.9 0-4.9 1.5-4.9 3.7 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.3 0 .7-.8 1-1.6 1-1.1 0-1.6-.2-2.5-.5l-.3-.2-.4 2.3c.7.3 2 .6 3.3.6 3.1 0 5.1-1.5 5.1-3.8 0-1.3-.8-2.2-2.5-3-1-.5-1.6-.8-1.6-1.3 0-.5.5-.9 1.7-.9.9 0 1.6.2 2.1.4l.3.1.4-2.3zm6.3 7.3h2.3l-2-11.3h-2.2c-.5 0-.9.3-1.1.7l-3.9 10.6h3.1l.6-1.7h3.7l.5 1.7zm-3.3-4.1l1.5-4.2.9 4.2h-2.4zm-13.5-7.2l-2.8 7.7-.3-1.5c-.5-1.7-2.2-3.6-4.1-4.5l2.6 9.6h3.1l4.6-11.3h-3.1z"
              fill="#1434CB"
            />
          </svg>
        </div>

        {/* Mastercard */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm">
          <svg viewBox="0 0 48 32" className="h-6" fill="none">
            <rect width="48" height="32" rx="4" fill="white" />
            <circle cx="18" cy="16" r="7" fill="#EB001B" />
            <circle cx="30" cy="16" r="7" fill="#F79E1B" />
            <path
              d="M24 10.5c-1.5 1.3-2.5 3.2-2.5 5.5s1 4.2 2.5 5.5c1.5-1.3 2.5-3.2 2.5-5.5s-1-4.2-2.5-5.5z"
              fill="#FF5F00"
            />
          </svg>
        </div>

        {/* American Express */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm">
          <svg viewBox="0 0 48 32" className="h-6" fill="none">
            <rect width="48" height="32" rx="4" fill="white" />
            <rect x="8" y="8" width="32" height="16" rx="2" fill="#006FCF" />
            <text x="24" y="19" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">
              AMEX
            </text>
          </svg>
        </div>

        {/* Elo */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm">
          <svg viewBox="0 0 48 32" className="h-6" fill="none">
            <rect width="48" height="32" rx="4" fill="white" />
            <circle cx="18" cy="16" r="6" fill="#FFCB05" />
            <circle cx="30" cy="16" r="6" fill="#00A3DF" />
            <path
              d="M24 11c-1.3 1.2-2.1 2.9-2.1 4.8 0 1.9.8 3.6 2.1 4.8 1.3-1.2 2.1-2.9 2.1-4.8 0-1.9-.8-3.6-2.1-4.8z"
              fill="#EE4023"
            />
          </svg>
        </div>

        {/* Pix */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm">
          <svg viewBox="0 0 48 32" className="h-6" fill="none">
            <rect width="48" height="32" rx="4" fill="white" />
            <path d="M24 12l-4 4 4 4 4-4-4-4zm0-2l6 6-6 6-6-6 6-6z" fill="#32BCAD" stroke="#32BCAD" strokeWidth="0.5" />
            <circle cx="24" cy="16" r="2" fill="#32BCAD" />
          </svg>
        </div>

        {/* Boleto */}
        <div className="flex items-center justify-center w-14 h-10 bg-white rounded border border-border shadow-sm px-2">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-6 bg-gray-700"></div>
            <div className="w-1 h-6 bg-gray-700"></div>
            <div className="w-0.5 h-6 bg-gray-700"></div>
            <div className="w-0.5 h-6 bg-gray-700"></div>
            <div className="w-1 h-6 bg-gray-700"></div>
            <div className="w-0.5 h-6 bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
