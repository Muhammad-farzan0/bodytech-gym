"use client";

import { useState, useMemo } from "react";

// ----- Helper functions to parse class names -----
const extractLocation = (name: string) => {
  const match = name.match(/\((.*?)\)/);
  return match ? match[1] : "Unknown";
};

const extractService = (name: string) => {
  return name.replace(/ \(.*?\)/, "").trim();
};

// ----- Schedule Data (with real timings from bodytechpk.com) -----
const schedule = [
  {
    day: "Monday",
    classes: [
      { name: "Taekwondo Kids (Bahria)", time: "4:00 PM – 5:00 PM" },
      { name: "Taekwondo Yellow Belt (EME)", time: "4:30 PM – 5:30 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "5:00 PM – 6:00 PM" },
      { name: "Taekwondo (Rahbar)", time: "5:00 PM – 6:00 PM" }, // ✅ ADDED
      { name: "Taekwondo Kids (Bahria)", time: "6:00 PM – 7:00 PM" },
      { name: "Taekwondo Family (Bahria)", time: "7:00 PM – 8:00 PM" },
      { name: "Football (Rahbar)", time: "7:00 PM – 8:00 PM" },
      { name: "45 Days Challenge (EME)", time: "7:00 PM – 8:00 PM" },
      { name: "Mix Martial Arts (Bahria)", time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { name: "Taekwondo Kids (Bahria)", time: "4:00 PM – 5:00 PM" },
      { name: "Taekwondo Yellow Belt (EME)", time: "4:30 PM – 5:30 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "5:00 PM – 6:00 PM" },
      { name: "Taekwondo (Rahbar)", time: "5:00 PM – 6:00 PM" }, // ✅ ADDED
      { name: "Taekwondo Kids (Bahria)", time: "6:00 PM – 7:00 PM" },
      { name: "Taekwondo Family (Bahria)", time: "7:00 PM – 8:00 PM" },
      { name: "Football (Rahbar)", time: "7:00 PM – 8:00 PM" },
      { name: "45 Days Challenge (EME)", time: "7:00 PM – 8:00 PM" },
      { name: "Mix Martial Arts (Bahria)", time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { name: "Taekwondo Kids (Bahria)", time: "4:00 PM – 5:00 PM" },
      { name: "Taekwondo Yellow Belt (EME)", time: "4:30 PM – 5:30 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "5:00 PM – 6:00 PM" },
      { name: "Taekwondo (Rahbar)", time: "5:00 PM – 6:00 PM" }, // ✅ ADDED
      { name: "Taekwondo Kids (Bahria)", time: "6:00 PM – 7:00 PM" },
      { name: "Taekwondo Family (Bahria)", time: "7:00 PM – 8:00 PM" },
      { name: "Football (Rahbar)", time: "7:00 PM – 8:00 PM" },
      { name: "45 Days Challenge (EME)", time: "7:00 PM – 8:00 PM" },
      { name: "Mix Martial Arts (Bahria)", time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { name: "Taekwondo Kids (Bahria)", time: "4:00 PM – 5:00 PM" },
      { name: "Taekwondo Yellow Belt (EME)", time: "4:30 PM – 5:30 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "5:00 PM – 6:00 PM" },
      { name: "Taekwondo (Rahbar)", time: "5:00 PM – 6:00 PM" }, // ✅ ADDED
      { name: "Taekwondo Kids (Bahria)", time: "6:00 PM – 7:00 PM" },
      { name: "Taekwondo Family (Bahria)", time: "7:00 PM – 8:00 PM" },
      { name: "Football (Rahbar)", time: "7:00 PM – 8:00 PM" },
      { name: "45 Days Challenge (EME)", time: "7:00 PM – 8:00 PM" },
      { name: "Mix Martial Arts (Bahria)", time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { name: "Taekwondo Kids (Bahria)", time: "4:00 PM – 5:00 PM" },
      { name: "Taekwondo Yellow Belt (EME)", time: "4:30 PM – 5:30 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "5:00 PM – 6:00 PM" },
      { name: "Taekwondo Kids (Bahria)", time: "6:00 PM – 7:00 PM" },
      { name: "Taekwondo Family (Bahria)", time: "7:00 PM – 8:00 PM" },
      { name: "45 Days Challenge (EME)", time: "7:00 PM – 8:00 PM" },
      { name: "Mix Martial Arts (Bahria)", time: "8:00 PM – 9:00 PM" },
    ],
  },
  {
    day: "Saturday",
    classes: [],
  },
  {
    day: "Sunday",
    classes: [],
  },
];

export default function ClassSchedule() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  // ----- Extract all unique locations and services from the data -----
  const allClasses = useMemo(() => schedule.flatMap((d) => d.classes), []);

  const locations = useMemo(() => {
    const locs = allClasses.map((c) => extractLocation(c.name));
    return ["All", ...Array.from(new Set(locs))];
  }, [allClasses]);

  const services = useMemo(() => {
    const servs = allClasses.map((c) => extractService(c.name));
    return ["All", ...Array.from(new Set(servs))];
  }, [allClasses]);

  // ----- Filter the schedule based on selections -----
  const filteredSchedule = useMemo(() => {
    return schedule
      .map((day) => {
        const filteredClasses = day.classes.filter((c) => {
          const loc = extractLocation(c.name);
          const serv = extractService(c.name);

          const locMatch = selectedLocation === "All" || loc === selectedLocation;
          const servMatch = selectedService === "All" || serv === selectedService;

          return locMatch && servMatch;
        });

        return { ...day, classes: filteredClasses };
      })
      .filter((day) => day.classes.length > 0);
  }, [selectedLocation, selectedService]);

  return (
    <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
      <div className="container-forge">
        {/* ----- Header ----- */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div data-aos="fade-up">
            <span className="eyebrow">Weekly Timetable</span>
            <h2 className="mt-4 text-4xl text-paper md:text-5xl">
              Classes running all week.
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Full weekly schedule with all classes, locations, and timings.
            </p>
          </div>
        </div>

        {/* ----- FILTERS (Two Dropdowns) ----- */}
        <div className="mt-6 flex flex-wrap items-center gap-4" data-aos="fade-up">
          {/* Location Dropdown */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="rounded-md border border-line bg-canvas px-4 py-2.5 text-sm text-paper focus:outline-none focus:ring-2 focus:ring-coral"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === "All" ? "All Locations" : loc}
              </option>
            ))}
          </select>

          {/* Service Dropdown */}
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="rounded-md border border-line bg-canvas px-4 py-2.5 text-sm text-paper focus:outline-none focus:ring-2 focus:ring-coral"
          >
            {services.map((serv) => (
              <option key={serv} value={serv}>
                {serv === "All" ? "All Services" : serv}
              </option>
            ))}
          </select>

          {/* Optional: Clear / Reset button (just a nice touch) */}
          {(selectedLocation !== "All" || selectedService !== "All") && (
            <button
              onClick={() => {
                setSelectedLocation("All");
                setSelectedService("All");
              }}
              className="text-xs text-muted underline underline-offset-2 hover:text-paper"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ----- Schedule Grid ----- */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchedule.map((d, i) => (
            <div
              key={d.day}
              className="panel p-6"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-coral">
                {d.day}
              </span>
              <div className="mt-4 space-y-3">
                {d.classes.map((c) => (
                  <div
                    key={`${c.name}-${c.time}`}
                    className="flex items-center justify-between border-b border-line pb-2 last:border-0"
                  >
                    <span className="text-sm text-paper">{c.name}</span>
                    <span className="font-mono text-xs text-muted">
                      {c.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ----- Empty state (if no classes match the filters) ----- */}
        {filteredSchedule.length === 0 && (
          <div className="mt-10 text-center text-muted">
            No classes match the selected filters.
          </div>
        )}
      </div>
    </section>
  );
}