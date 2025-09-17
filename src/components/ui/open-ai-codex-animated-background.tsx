"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, mounted };
};

export const Component = () => {
  const { width, height, mounted } = useWindowSize();

  // Match server-rendered markup on first paint to avoid hydration mismatch
  if (!mounted) {
    return <div className="absolute inset-0 w-full h-full" />;
  }

  return (
    <div
      className={cn("fixed inset-0 w-[100vw] h-[100vh]")}
      style={{
        overflow: 'hidden',
      }}
    >
      <UnicornScene
        production={true}
        projectId="1grEuiVDSVmyvEMAYhA6"
        width={Math.max(width || window.innerWidth || 1, 1)}
        height={Math.max(height || window.innerHeight || 1, 1)}
      />
    </div>
  );
};








