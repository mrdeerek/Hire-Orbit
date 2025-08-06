import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import { IconCloud } from "@/components/magicui/icon-cloud";

async function Home() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  const slugs = [
    "google",
    "adobe",
    "tcs",
    "infosys",
    "oracle",
    "microsoft",
    "ibm",
    "autodesk",
    "salesforce",
    "apple",
    "amazon",
    "intuit",
    "accenture",
    "sap",
    "meta",
    "capgemini",
    "alphabet",
    "servicenow",
    "deloitte",
    "cisco",
    "zoom",
    "uber",
    "lyft",
    "spotify",
    "twitter",
    "snapchat",
    "airbnb",
    "netflix",
    "dropbox",
    "pinterest",
    "slack",
    "nvidia",
    "qualcomm",
    "broadcom",
    "wipro",
    "hcl",
    "tech-mahindra",
    "reliance",
    "flipkart",
    "ola",
    "zomato",
    "swiggy",
    "byjus",
    "paytm",
    "infosys",
    "tata-motors",
    "mahindra",
    "bajaj",
    "godrej",
    "larsen-toubro",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <Fragment>
      <section className="relative w-full h-full min-h-full ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row lg:gap-10  lg:mt-10">
            <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <span className="flex space-x-2">
                  <span className=" w-14 mb-2 hidden lg:block dark:border-white border-b-2 border-gray-700"></span>
                  <span className="font-medium hidden lg:block dark:text-white text-gray-600">
                    <TypingAnimation
                      className="text-xl"
                      text="Your Gateway to Stellar Careers"
                    />
                  </span>
                </span>
                  <TypingAnimation
                    className="text-3xl text-left dark:text-white mt-5 lg:text-7xl text-black font-extrabold"
                    text="Launch Your Career into Orbit with Hire Orbit"
                  />
                <p className="mt-4 text-lg dark:text-gray-300 hidden lg:block text-gray-700">
                  Explore opportunities across top global and Indian companies.
                  Whether you're a recent graduate or a seasoned professional,
                  Hire-Orbit connects you with the right jobs to match your
                  skills and aspirations.
                </p>
                <div className="w-full mt-6 flex items-center text-white lg:justify-start gap-2">
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>
            <section className="relative w-full lg:w-[50%] flex items-center justify-end bg-re">
              <IconCloud images={images}  />
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
