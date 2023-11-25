import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="custom-contaier mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
        <p className="mb-4 rounded-full border border-gray-200 bg-white px-7 py-2 text-sm font-semibold text-gray-700 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          Quildoc is now public!
        </p>

        <h1 className="mb-5 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">documents</span> in
          seconds.
        </h1>

        <p className="mx-auto max-w-prose px-4 text-zinc-700 sm:px-0 sm:text-lg">
          Quildoc allows you to have conversations with any PDF document. Simply
          upload your file and start asking right away.
        </p>

        <Link
          href="/dashboard"
          target="_black"
          className={buttonVariants({ size: "lg", className: "mt-5" })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </header>

      {/* Demo Section */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-24 md:px-8">
          <div className="-m-2 rounded-xl  bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="/dashboard-preview.jpg"
              width={1364}
              height={866}
              quality={100}
              alt="Quildoc preview"
              priority
              className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-20"
            />
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72rem]"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="m-32 mx-auto max-w-5xl sm:mt-56">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl px-6 sm:text-center lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Start chatting in minutes
          </h2>
          <p className="text-lg text-gray-600">
            Chatting to your PDF files has never been easier than with Quildoc.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-24 space-y-4 md:flex md:space-x-12 md:space-y-0 md:px-6">
          <li className="flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:flex-1 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <p className="text-sm font-medium text-primary">Step 1</p>
            <h3 className="text-xl font-semibold">Sign up for an account</h3>
            <p className="text-zinc-700">
              Either starting out with a free plan or choose our{" "}
              <Link
                href="/pricing"
                className="text-blue-700 underline underline-offset-2"
              >
                pro plan
              </Link>
              .
            </p>
          </li>

          <li className="flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:flex-1 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <p className="text-sm font-medium text-primary">Step 2</p>
            <h3 className="text-xl font-semibold">Upload your PDF file</h3>
            <p className="text-zinc-700">
              We&apos;ll process your file and make it ready for you to chat
              with.
            </p>
          </li>

          <li className="flex flex-col space-y-2  border-l-4 border-zinc-300 py-2 pl-4 md:flex-1 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <p className="text-sm font-medium text-primary">Step 3</p>
            <h3 className="text-xl font-semibold">Start asking questions</h3>
            <p className="text-zinc-700">
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple. Try out Quildoc today - it really takes
                less than a minute.
              </span>
            </p>
          </li>
        </ol>

        <div className="mx-6 mt-20 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 sm:p-4 lg:rounded-2xl">
          <Image
            src="/file-upload-preview.jpg"
            alt="uploading preview"
            width={1419}
            height={732}
            quality={100}
            className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-20"
          />
        </div>
      </section>
    </main>
  );
}
