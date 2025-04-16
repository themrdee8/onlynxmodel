// import Link from "next/link";

import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import cover from "@/public/assets/cover.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        id="home"
        className="relative bg-[#DCFFFC] w-full md:h-[570px] h-[320px] flex justify-between pt-24 overflow-hidden"
      >
        <div className="absolute md:h-40 md:w-40 h-18 w-18 rounded-full -translate-y-1/2 bg-[#BAB0A780] md:-left-12.5 -left-7.5 md:bottom-76 bottom-38 z-0" />
        <div className="absolute md:h-48 md:w-48 h-20 w-20 rounded-full bg-[#CFE0E480] md:right-[700px] right-[200px] bottom-38 z-0" />
        <div className="absolute md:h-48 md:w-48 h-22 w-22 rounded-full bg-[#BE854380] md:left-[200px] right-[270px] md:-bottom-[50px] -bottom-[35px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-[#CFE0E480] right-32.5 bottom-72 z-0" />
        <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-[#9A653A80] right-7.5 bottom-44 z-0" />

        <div className="relative z-10 p-3 md:p-8 mr-52">
          <h1 className=" font-bold text-[#B37300] md:text-[35px] uppercase text-wrap mb-2">
            Onlynx chatting
          </h1>
          <h2 className="text-[11px] md:text-[30px] uppercase">
            Premium chatting service
            <p className="text-[11px] md:text-[22px]">
              For individial models and for agencies
            </p>
          </h2>
          <div className="flex items-center justify-between pt-4">
            <div className="bg-[#B37300] text-white text-[9px] md:text-[18px] px-1.5 md:px-8 py-1 md:py-4 rounded-full">
              Know more
            </div>
            <div className="bg-white text-[#00D4FE] text-[9px] md:text-[18px] px-1.5 md:px-8 py-1 md:py-4 rounded-full mr-12">
              Get started
            </div>
          </div>
        </div>

        <div className="absolute md:-right-24 -right-8.5 -bottom-48.5 md:-bottom-[500px] transform z-0 -translate-y-1/2">
          <Image
            src={cover}
            alt="cover"
            className="rounded-full md:w-[680px] w-[270px] h-[270px] md:h-[680px] object-cover"
          ></Image>
        </div>
      </div>

      <div
        id="body"
        className="relative w-full h-full p-5 overflow-hidden bg-[#FFF6F6]"
      >
        {/* <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-blue-300 -right-9.5 bottom-52 z-0" />
        <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-blue-300 -right-3.5 bottom-2 z-0" /> */}

        <div className="relative z-10">
          <h1 className="font-semibold pb-3">What to know?</h1>
          <p className="text-[13px] mr-32">
            Onlynx is a Europe based chatting agency, working with European
            chatters and team leaders.
          </p>
        </div>

        <div className="relative z-10">
          <h1 className="font-semibold pt-4 pb-3">What makes us different?</h1>
          <p>Our chatting techniques makes us standout.</p>
          <ul className="list-disc pl-4">
            <li>
              the <span className="text-[#B37300] font-semibold">first</span> is
              the{" "}
              <span className="text-[#B37300] font-bold">
                hard selling method
              </span>
              : push the PPVs until someone buys them
            </li>
            <li>
              the <span className="text-[#B37300] font-semibold">second</span>{" "}
              is the relationship building method: choose{" "}
              <span className="text-[#B37300]">one subscriber</span> out of{" "}
              <span className="text-[#B37300] font-bold">ten</span> who has the
              highest probability of becoming a high spender focus on him, build
              a relationship and sell content for several hundred bucks.
            </li>
          </ul>
          <p>
            Our team works so smoothly because we are able to use both tactics
            without losing any fans thanks to our highly developed analytic
            system and our creative and experienced team members.
          </p>
        </div>

        <div className="absolute md:h-24 md:w-24 h-23 w-23 rounded-full bg-[#CFE0E480] -right-12.5 top-[18px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-23 w-23 rounded-full bg-[#BAB0A780] -left-3.5 top-[175px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-21 w-21 rounded-full bg-[#9A653A80] right-2.5 top-[170px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-27 w-27 rounded-full bg-[#CFE0E480] right-40.5 top-[320px] z-0" />

        <div className="absolute md:h-24 md:w-24 h-24 w-24 rounded-full bg-[#CFE0E480] -left-1.5 bottom-[600px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-28 w-28 rounded-full bg-[#BE854380] left-38.5 bottom-[480] z-0" />
        <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-[#BAB0A780] right-6.5 bottom-[400] z-0" />
        <div className="absolute md:h-24 md:w-24 h-27 w-27 rounded-full bg-[#CFE0E480] right-40.5 bottom-[300] z-0" />
        <div className="absolute md:h-24 md:w-24 h-20 w-20 rounded-full bg-[#9A653A80] left-10.5 bottom-[120px] z-0" />
        <div className="absolute md:h-24 md:w-24 h-25 w-25 rounded-full bg-[#BE854380] right-16.5 -bottom-[10px] z-0" />


        <div className="relative z-10">
          <h1 className="font-semibold pt-4 pb-3">Did you know?</h1>
          <Dropdown
            text="1. On OF, 80% of your income should be earned from your messages
              and tips."
            specificClassNames="mt-3 md:mt-1 md:text-[19px] text-[25px]"
            description="CAN BAD CHATTING REALLY RUIN YOUR PAGE? SADLY, YES, IT'S HARMFUL IN SEVERAL WAYS. FIRST OF ALL, SUBSCRIBERS CAN RECOGNIZE THE AMATEUR BEHAVIOUR AND LOSE INTEREST, BUT WHAT'S WORSE IS BAD CHATTERS DON'T PLAN FOR THE LONG TERM; THEY WANT TO EARN A QUICK HUNDRED BUCKS, SO THEY SPAM CHEAP PPVS WITHOUT MAINTAINING THE RELATIONSHIP. THIS WAY THE FAN WILL SEE THE “INTERESTING PARTS” FOR CHEAP AND YOU WILL SLOWLY LOSE YOUR VALUE. IF YOU LOSE YOUR VALUE, THE FANS WILL SOON FIND ANOTHER MODEL TO SPEND THEIR MONEY ON. THERE IS NO WORSE JOB THAN TRYING TO RECOVER A PAGE FULL OF BURNT-OUT FANS. YES, “FOREVER” WAS A BIT HARSH BECAUSE EVERYTHING CAN BE RECOVERED, SUCH AS A DEAD PAGE, BUT IT'LL REQUIRE A LOT OF WORK, MONEY, AND HEADACHES."
          />
          <Dropdown
            specificClassNames="md:mt-1 text-[19px]"
            text="2. Bad chatting can ruin your page forever."
            description="CHATTING IS A VERY SENSITIVE TOPIC; YOU'RE TRUSTING TOTAL STRANGERS WITH THE PAGE YOU WORKED SO HARD ON TO GAIN SUBSCRIBERS AND GENERATE INCOME. I HAVE MET SEVERAL PEOPLE WHO BECAME VICTIMS OF VENGEFUL CHATTERS. FOR EXAMPLE, YOU MAY WANT TO FIRE A CHATTER FOR HIS LACK OF SALES OR FOR MAKING THE SAME MISTAKE SEVERAL TIMES. AND WHEN YOU DO, HE MAY LOG IN ONE FINAL TIME TO SEND A MESSAGE TO ONE OF THE SUBSCRIBERS CONTAINING A BUNCH OF RESTRICTED WORDS JUST TO TAKE REVENGE. BOOM! YOUR ACCOUNT IS FLAGGED, AND YOU HAVE TO BEG ONLYFANS SUPPORT FOR WEEKS OR MONTHS TO GET IT BACK, AND IT’S NOT EVEN CERTAIN THAT YOU WILL."
          />
          <Dropdown
            text="3. It takes one message from a resentful chatter to get your
                account flagged."
            description="YES, IT'S TRUE, WITH THE RIGHT CHATTING TACTICS AND CONTENT
              YOU CAN EARN 5-10 TIMES MORE THAN THE INCOME COMING FROM YOUR
              SUBSCRIPTION PRICE. ALL THE BIG MODELS AND AGENCIES EARN THEIR 6
              FIGURES FROM THE SOLD CONTENT (I MEAN SOLD RELATIONSHIP). OOPS, I
              GAVE AWAY THE SECRET FORMULA. GOOD CHATTING STARTS WHEN THE
              SUBSCRIBER BUYS YOUR CONTENT BECAUSE HE IS IN LOVE WITH YOU, NOT
              WHEN HE WANTS TO WATCH PORN."
            specificClassNames="mt-3 md:mt-1 md:text-[19px] text-[25px]"
          />
        </div>

        <div className="relative z-10">
          <h1 className="font-semibold pt-4 pb-3">Some more about us...</h1>
          <div className="flex items-center justify-between space-x-2">
            <div className="border overflow-auto rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
              <p className="text-[15px] md:text-[18px] md:mr-32">
                At <span className="text-[#B37300] font-bold">Onlynx</span>, we
                use the best and latest manipulation tactics to reach the
                maximum income as soon as possible. Our team is working
                tirelessly to come up with new ways and methods to max out the
                LTV of your subscribers
              </p>
            </div>
            <div className="border overflow-auto rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
              <p className="text-[15px] md:text-[18px] md:mr-32">
                If you choose us, you also don&apos;t have to worry about bad
                chatting. All our associates are highly intelligent and
                perfectly trained. They all prefer the long-term goals instead
                of the short-term fun.
              </p>
            </div>
            <div className="border overflow-auto rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
              <p className="text-[15px] md:text-[18px] md:mr-32">
                Besides, you never have to worry about your account&apos;s
                safety. We keep track of every conversation, and thanks to the
                software we use, no restricted message can be sent.
              </p>
            </div>
          </div>
        </div>

        <div>Sneak peek</div>
        <div>Client Review</div>
        <div>Contact us</div>
      </div>
    </div>
  );
}
