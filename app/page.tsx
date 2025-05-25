"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MailCheck } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email address");
      return;
    }
    const promise = () =>
      new Promise<{ name: { email: string } }>((resolve) =>
        setTimeout(() => resolve({ name: { email } }), 2000)
      );

    toast.promise(promise, {
      loading: "submitting...",
      success: (data) => {
        return `${data.name.email} has been added`;
      },
      error: "Error",
    });
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover bg-center" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      <h1 className="absolute top-10 left-4 lg:left-10 text-3xl lg:text-4xl font-bold tracking-widest text-white uppercase">
        Ionmail<span className="text-blue-500">.</span>io
      </h1>

      {/* Content Container */}
      <div className="relative z-10 max-w-lg w-full space-y-12 animate-fade-in">
        {/* Logo */}
        <div className="text-center space-y-6">
          <p className="lg:text-xl text-gray-400 tracking-wider">
          Experience the future of secure, AI-powered email. Subscribe and stay informed.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/40 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-black/50 backdrop-blur-sm ring-1 ring-gray-800 rounded-lg p-6 space-y-4">
              <p className="text-center text-gray-400 lg:text-2xl font-bold uppercase flex items-center justify-center gap-2">
                subscribe <MailCheck />
              </p>
              <div className="relative flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-gray-800 text-white text-center placeholder:text-gray-600 rounded-full h-14"
                />
                <Button
                  type="submit"
                  className="absolute right-0 top-2 bg-transparent hover:bg-transparent text-white transition-colors duration-200 rounded-full"
                >
                  <ArrowRight size={24} className="" />
                </Button>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center text-gray-400 lg:text-xl">
          We will launch for the <span className="text-blue-500">general</span>{" "}
          public
          <br /> <span className="text-blue-500">soon!</span>
        </div>
      </div>
    </main>
  );
}
