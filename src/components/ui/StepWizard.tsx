"use client";

import { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  detail?: string[];
}

interface StepWizardProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}

export default function StepWizard({ steps, orientation = "horizontal" }: StepWizardProps) {
  if (orientation === "vertical") {
    return (
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-4">
            {/* Left: Number + Line */}
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium flex-shrink-0 border"
                style={{
                  backgroundColor: "#1D4ED8",
                  borderColor: "#2563EB",
                  color: "#FFFFFF",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {String(step.number).padStart(2, "0")}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 my-2 bg-[#D0DCE8]" style={{ minHeight: "40px" }} />
              )}
            </div>

            {/* Right: Content */}
            <div className={`${index < steps.length - 1 ? "pb-8" : ""} flex-1`}>
              <div className="flex items-center gap-2 mb-2">
                <step.icon size={16} className="text-[#2563EB]" />
                <h3
                  className="font-heading font-semibold text-[#0B1D35]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
                >
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-[#3D5470] mb-3">{step.description}</p>
              {step.detail && (
                <ul className="space-y-1">
                  {step.detail.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#7A90A6]">
                      <span className="text-[#2563EB] mt-0.5">▸</span>
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

  return (
    <div className="relative">
      {/* Connector Line */}
      <div
        className="absolute top-5 left-0 right-0 h-px hidden md:block"
        style={{ background: "linear-gradient(90deg, transparent 5%, #D0DCE8 20%, #D0DCE8 80%, transparent 95%)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            {/* Number Circle */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-medium z-10 border mb-4"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#2563EB",
                color: "#3B82F6",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {String(step.number).padStart(2, "0")}
            </div>

            {/* Icon */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: "#1D4ED820", border: "1px solid #2563EB30" }}
            >
              <step.icon size={16} className="text-[#2563EB]" />
            </div>

            <h3
              className="font-heading font-semibold text-[#0B1D35] mb-2 text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem", letterSpacing: "0.02em" }}
            >
              {step.title}
            </h3>
            <p className="text-xs text-[#3D5470] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
