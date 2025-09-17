"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AvatarItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AvatarGroupProps {
  items: AvatarItem[];
  className?: string;
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
  mobileSize?: "sm" | "md" | "lg";
}

// Individual Avatar Component
const Avatar = ({
  item,
  index,
  totalItems,
  size,
  isHovered,
  onHover,
  onLeave,
  isMobile,
  setShowTooltip,
  setHoveredIndex,
  hoveredIndex,
  showTooltip,
}: {
  item: AvatarItem;
  index: number;
  totalItems: number;
  size: "sm" | "md" | "lg";
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isMobile: boolean;
  setShowTooltip: (show: boolean) => void;
  setHoveredIndex: (index: number | null) => void;
  hoveredIndex: number | null;
  showTooltip: boolean;
}) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div
      className="relative group flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => {
        if (isMobile) {
          setHoveredIndex(item.id);
          setShowTooltip(true);
        }
      }}
      style={{
        marginLeft: index === 0 ? 0 : "-0.5rem",
        zIndex: totalItems - index,
      }}
    >
      <AnimatePresence mode="popLayout">
        {(isHovered || (isMobile && showTooltip && hoveredIndex === item.id)) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                             className="absolute -top-16 whitespace-nowrap flex text-xs flex-col items-center justify-center rounded-xl bg-white z-[9999] shadow-lg px-4 py-2 border min-w-max"
          >
            <div className="font-bold text-gray-900 relative z-30 text-base text-center">
              {item.name}
            </div>
            <div className="text-gray-600 text-xs text-center">
              {item.designation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05, zIndex: 100 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative"
      >
        <Image
          height={100}
          width={100}
          src={item.image}
          alt={`Фото ученика ${item.name} - ${item.designation}`}
          className={cn(
            "object-cover !rounded-full border-2 border-background transition duration-300",
            sizeClasses[size]
          )}
        />
      </motion.div>
    </div>
  );
};

const AvatarGroup = ({
  items,
  className,
  maxVisible = 5,
  size = "md",
  mobileSize = "md",
}: AvatarGroupProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Detect mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide tooltip for mobile after 2.5 seconds
  React.useEffect(() => {
    if (isMobile && showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
        setHoveredIndex(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isMobile, showTooltip]);

  // Restart timer when hoveredIndex changes on mobile
  React.useEffect(() => {
    if (isMobile && showTooltip && hoveredIndex !== null) {
      // Clear any existing timer and start new one
      const timer = setTimeout(() => {
        setShowTooltip(false);
        setHoveredIndex(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isMobile, showTooltip, hoveredIndex]);

  // Close tooltip when clicking outside on mobile
  React.useEffect(() => {
    if (isMobile && showTooltip) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.avatar-group-container')) {
          setShowTooltip(false);
          setHoveredIndex(null);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, showTooltip]);

  const visibleItems = items.slice(0, maxVisible);
  const remainingCount = items.length - maxVisible;
  const currentSize = isMobile ? mobileSize : size;

  return (
    <div className={cn("flex items-center justify-center avatar-group-container", className)}>
      {visibleItems.map((item, index) => (
        <Avatar
          key={item.id}
          item={item}
          index={index}
          totalItems={visibleItems.length}
          size={currentSize}
          isHovered={hoveredIndex === item.id}
          onHover={() => {
            if (!isMobile) setHoveredIndex(item.id);
          }}
          onLeave={() => {
            if (!isMobile) setHoveredIndex(null);
          }}
          isMobile={isMobile}
          setShowTooltip={setShowTooltip}
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          showTooltip={showTooltip}
        />
      ))}

             {remainingCount > 0 && (
        <div
          className="relative group flex items-center justify-center"
          style={{
            marginLeft: "-0.5rem",
            zIndex: 0,
          }}
        >
          <AnimatePresence mode="popLayout">
            {(hoveredIndex === -1 || (isMobile && showTooltip && hoveredIndex === -1)) && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute -top-16 whitespace-nowrap flex text-xs flex-col items-center justify-center rounded-xl bg-white z-[9999] shadow-lg px-4 py-2 border min-w-max"
                style={{ 
                  left: isMobile ? 'auto' : undefined,
                  right: isMobile ? '0' : undefined,
                  transform: isMobile ? 'translateX(0)' : undefined
                }}
              >
                <div className="font-bold text-gray-900 relative z-30 text-base text-center">
                  И еще более 45 моих учеников
                </div>
                <div className="text-gray-600 text-xs text-center">
                  уже стали косметологами
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05, zIndex: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
            onMouseEnter={() => {
              if (!isMobile) setHoveredIndex(-1);
            }}
            onMouseLeave={() => {
              if (!isMobile) setHoveredIndex(null);
            }}
            onClick={() => {
              if (isMobile) {
                setHoveredIndex(-1);
                setShowTooltip(true);
              }
            }}
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-full border-2 border-background bg-muted text-muted-foreground font-medium cursor-pointer",
                currentSize === "sm"
                  ? "h-8 w-8"
                  : currentSize === "md"
                  ? "h-10 w-10"
                  : "h-12 w-12"
              )}
            >
              +{remainingCount}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;


