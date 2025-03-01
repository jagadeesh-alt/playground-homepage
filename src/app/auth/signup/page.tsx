"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add your form submission logic here
  };

  return (
    <div className="flex min-h-screen w-full bg-[#0A0F1E] text-white relative overflow-hidden">
      {/* Left Side - Animated Design Panel */}
      <div className="hidden lg:flex flex-col justify-center items-start w-1/2 px-12 relative">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold tracking-wide"
        >
          Welcome to
          <span className="text-green-400"> Darion Playground</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-lg text-gray-300 max-w-lg"
        >
          Create your account and start coding with AI-powered tools.
        </motion.p>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md p-8 bg-[#131827] border border-white/10 shadow-xl rounded-xl backdrop-blur-lg relative"
        >
          <h2 className="text-3xl font-semibold text-center tracking-tight">
            Sign Up
          </h2>
          <p className="text-center text-gray-400 mt-2 text-sm">
            Enter your details to create an account.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              className="bg-[#1b2238] text-white border border-white/20 focus:ring-2 focus:ring-green-500 rounded-md"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#1b2238] text-white border border-white/20 focus:ring-2 focus:ring-green-500 rounded-md"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-[#1b2238] text-white border border-white/20 focus:ring-2 focus:ring-green-500 rounded-md"
            />
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white rounded-md transition-all duration-300 font-medium"
            >
              Sign Up
            </Button>
          </form>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">Already have an account? </span>
            <Link href="/auth/login" className="text-green-400 hover:underline font-medium transition-all">
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}