"use client";

import { membershipPlans } from "@/utils";
import { Button } from "../ui/button";
import {
  createPriceIdAction,
  createStripePaymentAction,
  updateProfileAction,
} from "@/actions";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const stripePromise = loadStripe(
  "pk_test_51P8df2SFHl4FUgYNvxTrpxGJb14YrLJgVmDgI8jj3Sqd0NRA9ntIaZjmLEzEOGcF4sEr1Qp3deKT4vNLRHLr5ij30045coSSFL"
);

function Membership({ profileInfo }) {
  const pathName = useSearchParams();

  async function handlePayment(getCurrentPlan) {
    const stripe = await stripePromise;
    const extractPriceId = await createPriceIdAction({
      amount: Number(getCurrentPlan?.price),
    });
    if (extractPriceId) {
      sessionStorage.setItem("currentPlan", JSON.stringify(getCurrentPlan));
      const result = await createStripePaymentAction({
        lineItems: [
          {
            price: extractPriceId?.id,
            quantity: 1,
          },
        ],
      });

      console.log(result);

      await stripe.redirectToCheckout({
        sessionId: result?.id,
      });
    }

    console.log(extractPriceId);
  }

  async function updateProfile() {
    const fetchCurrentPlanFromSessionStroage = JSON.parse(
      sessionStorage.getItem("currentPlan")
    );

    await updateProfileAction(
      {
        ...profileInfo,
        isPremiumUser: true,
        memberShipType: fetchCurrentPlanFromSessionStroage?.type,
        memberShipStartDate: new Date().toString(),
        memberShipEndDate: new Date(
          new Date().getFullYear() +
            fetchCurrentPlanFromSessionStroage?.type ===
          "basic"
            ? 1
            : fetchCurrentPlanFromSessionStroage?.plan === "teams"
            ? 2
            : 5,
          new Date().getMonth(),
          new Date().getDate()
        ),
      },
      "/membership"
    );
  }

  useEffect(() => {
    if (pathName.get("status") === "success") updateProfile();
  }, [pathName]);

  console.log(profileInfo);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end dark:border-white justify-between border-b pb-2 pt-1 lg:pt-14">
        <h1 className="lg:text-4xl text-[29px] font-bold dark:text-white tracking-tight text-gray-950">
          {profileInfo?.isPremiumUser
            ? "You are a premium user"
            : "Choose Your Best Plan"}
        </h1>
        <div>
          {profileInfo?.isPremiumUser ? (
            <Button className="flex h-11 items-center justify-center px-5">
              {
                membershipPlans.find(
                  (planItem) => planItem.type === profileInfo?.memberShipType
                ).heading
              }
            </Button>
          ) : null}
        </div>
      </div>
      <div className="py-20 pb-10 pt-4">
        <div className=" w-full mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-3">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">{plan.heading}</h1>
                </div>
                <p className="mt-4 text-3xl font-bold">₹{plan.price}/month</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="ml-2">For {plan.type}</span>
                  </li>
                </ul>
                {profileInfo?.memberShipType === "enterprise" ||
                (profileInfo?.memberShipType === "basic" && index === 0) ||
                (profileInfo?.memberShipType === "teams" &&
                  index >= 0 &&
                  index < 2) ? null : (
                  <Button
                    onClick={() => handlePayment(plan)}
                    className="mt-6 w-full disabled:opacity-65 dark:bg-[#fffa27] flex h-11 items-center justify-center px-5"
                  >
                    {profileInfo?.memberShipType === "basic" ||
                    profileInfo?.memberShipType === "teams"
                      ? "Update Plan"
                      : "Get Premium"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
