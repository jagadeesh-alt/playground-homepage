"use client";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Login() {
  return (
    <div className={`flex min-h-screen w-full bg-[#0c0f19] ${manrope.className}`}>
      {/* Left Side Panel with Enhanced Design */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-[#151a30] via-[#1a1f40] to-[#202657] text-white p-12 border-r border-white/10 relative overflow-hidden">
        {/* Animated Background Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-10 left-10 w-36 h-36 bg-blue-500/40 blur-[80px] rounded-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/40 blur-[100px] rounded-full"
        ></motion.div>

        {/* Welcome Message */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-semibold tracking-wide drop-shadow-md text-center"
        >
          Welcome to <span className="text-blue-400">Darion Playground</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg text-white/90 max-w-md text-center"
        >
          The future of AI-powered coding awaits.
        </motion.p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full max-w-md p-10 bg-[#131827] border border-white/10 shadow-2xl rounded-2xl backdrop-blur-lg relative ${inter.className}`}
        >
          {/* Form Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold text-center text-white tracking-tight"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-400 mt-2 text-sm"
          >
            Sign in to your account
          </motion.p>

          {/* Form Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 space-y-6"
          >
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#1b2238] text-white border border-white/20 focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-3"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-[#1b2238] text-white border border-white/20 focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-3"
            />

            {/* Login Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 font-medium shadow-lg py-3">
              Login
            </Button>

            {/* Google Sign-In Button */}
            <Button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 bg-[#1b2238] text-white border border-white/20 hover:bg-[#202a47] transition-all duration-300 font-medium shadow-lg py-3"
            >
              <FaGoogle className="text-red-500" /> Sign in with Google
            </Button>
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-6"
          >
            <Link href="/auth/reset-password" className="text-sm text-blue-400 hover:underline transition-all">
              Forgot password?
            </Link>
          </motion.div>

          {/* Signup Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-3"
          >
            <span className="text-sm text-gray-400">New here? </span>
            <Link href="/auth/signup" className="text-blue-400 hover:underline font-medium transition-all">
              Create an account
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}