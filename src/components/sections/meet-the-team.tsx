"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import { team } from "@/data/team";

export default function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50/50 dark:from-surface-950 dark:to-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="OUR TEAM"
          title="Meet the people behind your healing"
          description="Our licensed and experienced counsellors are dedicated to providing compassionate, professional support tailored to your unique needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <AnimatedCard key={member.name} delay={i * 150}>
              <motion.div
                className="group relative bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-surface-700 hover:shadow-xl hover:shadow-pink-500/5 hover:border-pink-100 dark:hover:border-pink-900/50 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Specialty overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-pink-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">
                        Speciality
                      </p>
                      <p className="text-white text-sm font-semibold leading-snug">
                        {member.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Name overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-pink-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
