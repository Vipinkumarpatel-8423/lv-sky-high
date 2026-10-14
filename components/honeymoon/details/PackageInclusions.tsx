
import { CheckCircle2, XCircle } from "lucide-react";
import type { HoneymoonPackage } from "@/data/honeymoon";

type Props = {
  pkg: HoneymoonPackage;
};

export default function PackageInclusions({ pkg }: Props) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-light p-5 sm:p-7">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-dark sm:text-2xl">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Inclusions
          </h2>

          <ul className="mt-5 space-y-3">
            {pkg.inclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-muted"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-light p-5 sm:p-7">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-dark sm:text-2xl">
            <XCircle className="h-6 w-6 text-secondary" />
            Exclusions
          </h2>

          <ul className="mt-5 space-y-3">
            {pkg.exclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-muted"
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
