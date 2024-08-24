import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do I rent a bike?",
    answer:
      "Renting a bike is easy! Just visit our website, select the type of bike you'd like to rent, choose your rental period, and complete the booking process. You'll receive a confirmation email with pickup details.",
  },
  {
    question: "What types of bikes are available?",
    answer:
      "We offer a wide range of bikes, including city bikes, mountain bikes, e-bikes, and kids' bikes. Whether you're exploring the city or heading out on a trail, we have the perfect bike for you.",
  },
  {
    question: "Do I need to bring my own helmet?",
    answer:
      "No, we provide helmets with every bike rental. Safety is our priority, so we ensure that all our customers have access to the necessary protective gear.",
  },
  {
    question: "What should I do if I have a problem with the bike?",
    answer:
      "If you encounter any issues with the bike during your rental, please contact us immediately. We'll either provide you with a replacement bike or offer on-site assistance, depending on the situation.",
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer:
      "Yes, you can cancel or modify your reservation up to 24 hours before your scheduled pickup time. Please refer to our cancellation policy for more details, or contact our support team for assistance.",
  },
  {
    question: "Are there any discounts for long-term rentals?",
    answer:
      "Yes, we offer discounted rates for long-term rentals. The longer you rent, the more you save! Check our pricing page or contact us for more details.",
  },
  {
    question: "Is there a minimum age requirement for renting a bike?",
    answer:
      "Yes, the minimum age to rent a bike is 18 years old. However, we have bikes available for children, which can be rented by an adult on their behalf.",
  },
  {
    question: "What if I return the bike late?",
    answer:
      "We understand that delays can happen. If you return the bike late, an additional hourly fee will be charged. Please refer to our rental terms for specific details on late fees.",
  },
];

export default function FaqSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6  sm:py-10 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
