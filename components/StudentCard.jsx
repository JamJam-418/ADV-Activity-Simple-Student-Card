"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  return (
    <section className="rounded-lg border-8 border-red-500 bg-black px-12 text-center text-white shadow">
      <h2 className="mb-4 text-xl font-bold uppercase">Student Card</h2>

      <p className="text-2xl font-bold text-white">{name}</p>
      <p className="mt-2">{course}</p>
      <p>{year}</p>

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="mt-5 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-purple-700"
      >
        Click Me
      </button>

      <p className="mt-4">{message}</p>
    </section>
  );
}