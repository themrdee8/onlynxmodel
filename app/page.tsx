// import Link from "next/link";

import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import cover from "@/public/assets/cover.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#FFF6F6]">
      <Navbar />
      <div
        id="home"
        className="relative bg-[#DCFFFC] w-full md:h-[570px] h-[320px] flex justify-between pt-24 overflow-hidden"
      >
        <div className="p-3 md:p-8 mr-60">
          <h1 className=" font-bold text-[#B37300] md:text-[35px] uppercase text-wrap mb-2">
            Onlynx chatting
          </h1>
          <p className="text-[11px] md:text-[30px] uppercase">
            Premium chatting service
            <p className="text-[11px] md:text-[22px]">For individial models and for agencies</p>
          </p>
          <div className="flex items-center justify-between pt-4">
            <div className="bg-[#B37300] text-white text-[11px] md:text-[18px] px-2.5 md:px-8 py-1 md:py-4 rounded-full">
              Know more
            </div>
            <div className="bg-white text-[#00D4FE] text-[11px] md:text-[18px] px-2.5 md:px-8 py-1 md:py-4 rounded-full mr-12">
              Get started
            </div>
          </div>
        </div>
        <div className="absolute md:-right-24 -right-8.5 -bottom-48.5 md:-bottom-[500px] transform z-0 -translate-y-1/2">
          <Image
            src={cover}
            alt="cover"
            className="rounded-full md:w-[680px] w-[300px] h-72 md:h-[680px] object-cover"
          ></Image>
        </div>
      </div>

      <div id="body" className="w-full h-full p-5">
        <div>
          <h1 className="font-semibold pb-3">What to know?</h1>
          <p className="text-[13px] mr-32">
            Onlynx is a Europe based chatting agency, working with European
            chatters and team leaders.
          </p>
        </div>

        <div>
          <h1 className="font-semibold pt-4 pb-3">What makes us different?</h1>
          <p>Our chatting techniques makes us standout.</p>
          <ol>
            <li>
              the first is the hard selling method: push the PPVs until someone
              buys them
            </li>
            <li>
              the second is the relationship building method: choose one
              subscriber out of ten who has the highest probability of becoming
              a high spender focus on him, build a relationship and sell content
              for several hundred bucks.
            </li>
          </ol>
          <p>
            Our team works so smoothly because we are able to use both tactics
            without losing any fans thanks to our highly developed analytic
            system and our creative and experienced team members.
          </p>
        </div>

        <div>
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

        <div>
          <h1 className="font-semibold pt-4 pb-3">Some more about us...</h1>
          <div className="flex items-center justify-between space-x-2">
            <div className="border rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
              <p className="text-[15px] md:text-[18px] md:mr-32">
                At Onlynx, we use the best and latest manipulation tactics to
                reach the maximum income as soon as possible. Our team is
                working tirelessly to come up with new ways and methods to max
                out the LTV of your subscribers
              </p>
            </div>
            <div className="border rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
              <p className="text-[15px] md:text-[18px] md:mr-32">
                If you choose us, you also don&apos;t have to worry about bad
                chatting. All our associates are highly intelligent and
                perfectly trained. They all prefer the long-term goals instead
                of the short-term fun.
              </p>
            </div>
            <div className="border rounded-md h-[360px] md:mr-8 items-center md:h-[280px] p-3 md:p-6 w-[200px] md:w-[500px]">
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
