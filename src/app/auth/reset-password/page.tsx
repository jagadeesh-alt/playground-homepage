"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function ResetPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      {/* Animated Background Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-10 left-10 w-48 h-48 bg-purple-500/20 blur-[80px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"
      ></motion.div>

      {/* Reset Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="p-8 bg-[#1a1a2e] border border-white/10 shadow-2xl rounded-2xl backdrop-blur-lg">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-center text-white"
          >
            Reset Password
          </motion.h2>

          {/* Form Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 space-y-6"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#16213e] text-white border border-white/20 focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-3"
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 font-medium shadow-lg py-3">
              Send Reset Link
            </Button>
          </motion.div>

          {/* Back to Login Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-6"
          >
            <Link
              href="/auth/login"
              className="text-blue-400 hover:underline font-medium transition-all"
            >
              Back to Login
            </Link>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}