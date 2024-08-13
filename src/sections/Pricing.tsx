import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = (props: any) => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="pricingCards flex flex-col lg:flex-row gap-6 items-center my-10 lg:justify-center lg:items-end ">
          {pricingTiers.map((card, index) => (
            <div
              className={twMerge(
                "card",
                card.inverse === true &&
                  "border-black bg-black text-white dark:bg-white dark:text-black"
              )}
              key={"card" + index}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50 dark:text-white/60",
                    card.inverse === true && "text-white/60  dark:text-black"
                  )}
                >
                  {card.title}
                </h3>

                {card?.popular && (
                  <div className="inline-flex items-center text-sm rounded-xl px-4 py-1.5 border border-white/20 dark:invert">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span
                  className={twMerge(
                    "text-4xl font-bold tracking-tighter leading-none dark:text-white",
                    card?.inverse === true && "dark:text-black"
                  )}
                >
                  ${card.monthlyPrice}
                </span>
                <span
                  className={twMerge(
                    "tracking-tight font-bold text-white/50 dark:text-white/60",
                    card?.inverse === true && "dark:text-black/60"
                  )}
                >
                  /month
                </span>
              </div>
              <div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    card.inverse === true &&
                      "bg-white text-black dark:bg-black dark:text-white"
                  )}
                >
                  {card.buttonText}
                </button>
                <ul className="flex flex-col gap-8 mt-8">
                  {card.features.map((feature, index) => (
                    <li
                      key={index}
                      className={twMerge(
                        "text-sm flex items-center gap-4 dark:text-white",
                        card?.inverse === true && "dark:text-black"
                      )}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
