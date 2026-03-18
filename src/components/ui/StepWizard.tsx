"use client";

interface Step {
  number: number;
  title: string;
  description: string;
  detail?: string[];
}

interface StepWizardProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}

export default function StepWizard({ steps }: StepWizardProps) {
  return (
    <div>
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`grid gap-6 py-8 ${
            index < steps.length - 1 ? "border-b border-[#E5E7EB]" : ""
          }`}
          style={{ gridTemplateColumns: "120px 1fr" }}
        >
          {/* Number */}
          <div>
            <span className="text-[48px] font-bold text-[#0A1628] leading-none">
              {String(step.number).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div>
            <h3
              className="text-[20px] font-bold text-[#0A1628] mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              {step.title}
            </h3>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.75]">
              {step.description}
            </p>
            {step.detail && (
              <ul className="mt-3 space-y-1">
                {step.detail.map((d, i) => (
                  <li key={i} className="text-[13px] text-[#9CA3AF]">
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
