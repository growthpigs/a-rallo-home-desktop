import { NavigationHeader } from "./sections/NavigationHeader";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const BookDemoPage = (): JSX.Element => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavigationHeader />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Experience<br />
                the future of<br />
                ai-powered<br />
                engagement
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Rallo is the future of tailored<br />
                interactions across multiple<br />
                channels. Transform your<br />
                business communication with<br />
                intelligent agents that deliver<br />
                personalized experiences<br />
                everywhere your customers are.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  data-testid="button-explore"
                >
                  Explore
                </Button>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-gray-50"
                  data-testid="button-watch"
                >
                  Watch
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-6xl">📷</div>
            </div>
          </div>
        </section>

        {/* Custom Experience Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Your custom rallo<br />
                experience awaits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tailored to your unique business needs and<br />
                communication goals.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">STEP 1</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur<br />
                      adipiscing elit, sed do eiusmod tempor<br />
                      incididunt ut labore et dolore magna aliqua.<br />
                      Ut enim ad minim veniam, quis nostrud<br />
                      exercitation ullamco laboris nisi ut aliquip<br />
                      ex ea commodo consequat. Duis aute irure<br />
                      dolor in reprehenderit in voluptate velit esse<br />
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">STEP 2</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur<br />
                      adipiscing elit, sed do eiusmod tempor<br />
                      incididunt ut labore et dolore magna aliqua.<br />
                      Ut enim ad minim veniam, quis nostrud<br />
                      exercitation ullamco laboris nisi ut aliquip<br />
                      ex ea commodo consequat. Duis aute irure<br />
                      dolor in reprehenderit in voluptate velit esse<br />
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">STEP 3</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur<br />
                      adipiscing elit, sed do eiusmod tempor<br />
                      incididunt ut labore et dolore magna aliqua.<br />
                      Ut enim ad minim veniam, quis nostrud<br />
                      exercitation ullamco laboris nisi ut aliquip<br />
                      ex ea commodo consequat. Duis aute irure<br />
                      dolor in reprehenderit in voluptate velit esse<br />
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">STEP 4</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur<br />
                      adipiscing elit, sed do eiusmod tempor<br />
                      incididunt ut labore et dolore magna aliqua.<br />
                      Ut enim ad minim veniam, quis nostrud<br />
                      exercitation ullamco laboris nisi ut aliquip<br />
                      ex ea commodo consequat. Duis aute irure<br />
                      dolor in reprehenderit in voluptate velit esse<br />
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Current Section */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Current</h2>
              <p className="text-gray-600 mb-8">
                Get the latest on insights and data updates.
              </p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-email-signup"
                />
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};