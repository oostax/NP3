"use client";

import React from "react";
import Example from "@/components/ui/banner-ui";
import { Component as AnimatedBackground } from "@/components/ui/open-ai-codex-animated-background";

export default function DemoOne() {
  return (
    <div id="no-fixed-viewport" className="min-h-screen relative overflow-hidden">
      {/* Всегда показываем UnicornStudio сцену (включая мобильные) */}
      <div className="absolute inset-0">
        <AnimatedBackground />
      </div>

      {/* Баннер с фиксированной шириной и адаптивным ограничением */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-[520px] max-w-[92vw] px-4">
          <Example />
        </div>
      </div>
    </div>
  );
}
