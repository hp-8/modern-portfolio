"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import cn from "@/lib/cn";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Check, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Textarea } from "./Textarea";

export function ContactForm() {
  const [delivered, setDeliverd] = useState(false);

  const form = useRef<any>("");

  const socials = {
    gitHub: {
      name: "GitHub",
      link: "https://github.com/Noyon141",
    },
    instagram: {
      name: "Instagram",
      link: "https://www.instagram.com/mdnoyon141/?next=%2F",
    },
    linkedIn: {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mofijur-rahman-11655b244/",
    },
    facebook: {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100067476634459",
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_bu0zp8f", "template_wgilhsm", form.current, {
        publicKey: "A6UKXgNIz8cud4Cmq",
        limitRate: {
          id: "from_email",
          throttle: 5000,
        },
      })
      .then(
        () => {
          setDeliverd(true);
          toast.success("Email Delivered", {
            style: {
              border: "1px solid #ffffff ",
              backgroundColor: "#000000",

              padding: "0.15rem",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#000000",
              secondary: "#ffffff",
            },
          });

          setTimeout(() => {
            setDeliverd(false);
          }, 3000);
        },
        () => {
          toast.error("Failed to deliver email", {
            style: {
              border: "1px solid #ffffff ",
              backgroundColor: "#000000",

              padding: "0.15rem",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#000000",
              secondary: "#ffffff",
            },
          });

          setTimeout(() => {
            setDeliverd(false);
          }, 5000);
        }
      );
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit} ref={form}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Marston"
              type="text"
              name="from_name"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="johnmarston@gmail.com"
            type="email"
            name="from_email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            className=""
            placeholder="Type your message..."
            name="message"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {delivered && (
            <h1 className="flex items-center justify-center gap-2">
              <Toaster position="bottom-left" />
              <Check size={17} /> Email Delivered
            </h1>
          )}
          {!delivered && (
            <h1 className="flex items-center justify-center gap-2">
              <Send size={17} /> Send Email
            </h1>
          )}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 items-center justify-center">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => window.open(`${socials.gitHub.link}`)}
            type="button"
          >
            <IconBrandGithub className="h-6 w-6 mr-4 rounded-md p-[1px] bg-[#000000] text-white dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {socials.gitHub.name}
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => window.open(`${socials.linkedIn.link}`)}
            type="button"
          >
            <IconBrandLinkedin className="h-6 w-6 mr-3 rounded-md p-[1px] bg-blue-600 text-white" />
            <span className="text-neutral-700  dark:text-neutral-300 text-sm">
              {socials.linkedIn.name}
            </span>

            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => window.open(`${socials.instagram.link}`)}
            type="button"
          >
            <IconBrandInstagram className="h-6 w-6 rounded-md p-[1px] bg-[#FE304B] text-white  dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {socials.instagram.name}
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            onClick={() => window.open(`${socials.facebook.link}`)}
            type="button"
          >
            <IconBrandFacebook className="h-6 w-6 rounded-md p-[1px] bg-blue-600 text-white" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {socials.facebook.name}
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-white to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
