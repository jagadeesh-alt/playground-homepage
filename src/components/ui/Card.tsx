import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
      {children}
    </div>
  );
}
