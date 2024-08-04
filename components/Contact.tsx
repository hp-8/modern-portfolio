import { ContactForm } from "./ui/ContactForm";

export const Contact = () => {
  return (
    <div className="pb-20" id="contact">
      <h1 className="text-center lg:text-4xl text-2xl font-bold tracking-wide">
        Let&apos;s start a project{" "}
        <span className="bg-gradient-to-r from-white/[0.05] to-black rounded-lg px-1 ">
          together
        </span>
      </h1>
      <div className="">
        <ContactForm/>
      </div>
    </div>
  );
};
