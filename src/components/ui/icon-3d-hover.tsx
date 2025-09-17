'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
  variant?: 'Default' | 'Hover';
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring" as const
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: "easeInOut" as const,
  type: "tween" as const
};

const transformTemplate1 = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;

// Transition wrapper component
const Transition: React.FC<{ value: unknown; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "50+",
  text = "Видов процедур",
  variant = 'Default',
  className = "",
  style = {},
  width = 600,
  height = 150,
  ...restProps
}) => {
  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const [gestureState, setGestureState] = useState({ isHovered: false });
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = React.useId();

  const isHoverVariant = currentVariant === 'Hover';
  const variants = [currentVariant === 'Default' ? 'GPnJri30y' : 'zEwHlJ7zp'];

  const handleMouseEnter = async () => {
    setGestureState({ isHovered: true });
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setGestureState({ isHovered: false });
    setCurrentVariant('Default');
  };

  const cubeSliceVariants = {
    zEwHlJ7zp: {
      "--border-color": "rgb(255, 255, 255)"
    }
  };

  const titleVariants = {
    default: {
      "--fill-width": "0%"
    },
    hovered: {
      "--fill-width": "100%"
    }
  };

  const titleTransition = {
    duration: 0.5,
    ease: "easeInOut" as const,
    type: "tween" as const
  };

  const sliceCubeVariants = {
    zEwHlJ7zp: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1
    }
  };

  const cornerScaleVariants = {
    zEwHlJ7zp: {
      scale: 2.2
    }
  };

  const bgFillVariants = {
    zEwHlJ7zp: {
      opacity: 1
    }
  };

  return (
    <div style={{ width: isHoverVariant ? width : 120, height: isHoverVariant ? height : 120, transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}>
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={`icon-hover-3d ${className}`}
              data-framer-name="Default"
              data-highlight={true}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={currentVariant === 'Hover' ? handleMouseLeave : undefined}
              style={{
                backgroundColor: "transparent",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: isHoverVariant ? "40px" : "0px",
                height: "min-content",
                justifyContent: "center",
                overflow: "visible",
                padding: isHoverVariant ? "20px" : "10px",
                position: "relative",
                width: "min-content",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                ...style
              }}
            >
              {/* Icon Container */}
              <motion.div
                className="icon-container"
                data-framer-name="Icon"
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flex: "none",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: "10px",
                  height: "100px",
                  justifyContent: "center",
                  overflow: "visible",
                  padding: "0px",
                  position: "relative",
                  width: "100px",
                  zIndex: 1,
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              >
                {/* Красивая иконка вместо 3D кубов */}
                <motion.div
                  className="beauty-icon"
                  data-framer-name="Beauty Icon"
                  style={{
                    width: "60px",
                    height: "60px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    overflow: "hidden"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Иконка сердца */}
                  <motion.div
                    style={{
                      width: "40px",
                      height: "40px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {/* Сердце */}
                    <motion.div
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        transform: "rotate(-45deg)"
                      }}
                    >
                      {/* Левая часть сердца */}
                      <motion.div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)",
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          boxShadow: "0 0 10px rgba(255, 107, 157, 0.5)"
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Правая часть сердца */}
                      <motion.div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)",
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          boxShadow: "0 0 10px rgba(255, 107, 157, 0.5)"
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      
                      {/* Нижняя часть сердца */}
                      <motion.div
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "linear-gradient(135deg, #ff6b9d 0%, #ff8fab 100%)",
                          position: "absolute",
                          bottom: "0px",
                          left: "6px",
                          transform: "rotate(45deg)",
                          boxShadow: "0 0 10px rgba(255, 107, 157, 0.5)"
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.6
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Декоративные элементы вокруг сердца */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)"
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.6)",
                      boxShadow: "0 0 3px rgba(255, 255, 255, 0.3)"
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Content - скрыт по умолчанию */}
              <motion.div
                className="content"
                data-framer-name="Content"
                style={{
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                  flex: "none",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "12px",
                  height: "min-content",
                  justifyContent: "center",
                  maxWidth: "400px",
                  overflow: "hidden",
                  padding: "0px",
                  position: "relative",
                  opacity: isHoverVariant ? 1 : 0,
                  width: isHoverVariant ? "auto" : "0px",
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Text Container */}
                <motion.div
                  className="text-container"
                  data-framer-name="Text"
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flex: "none",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "10px",
                    height: "32px",
                    justifyContent: "center",
                    overflow: "visible",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  {/* BG Fill - Hidden for clean black/white effect */}
                  <motion.div
                    className="bg-fill"
                    data-framer-name="BG Fill"
                    style={{
                      flex: "none",
                      height: "32px",
                      left: "0px",
                      overflow: "hidden",
                      position: "absolute",
                      top: "calc(50% - 16px)",
                      width: "1px",
                      zIndex: 0,
                      backgroundColor: "transparent",
                      opacity: 0
                    }}
                  />
                  {/* Heading Text with hover effect */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "32px",
                      position: "relative",
                      whiteSpace: "pre",
                      width: "auto",
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "rgb(255, 255, 255)",
                      userSelect: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden"
                    }}
                  >
                    {/* Background text (white) */}
                    <span className='mx-1 text-center' style={{ position: "relative", zIndex: 1 }}>
                      {heading}
                    </span>
                    {/* Animated overlay text (black) */}
                    <motion.span
                      className='mx-1 mt-0.5 text-center'
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "rgb(0, 0, 0)",
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`,
                        zIndex: 2
                      }}
                      animate={{
                        clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)`
                      }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>

                    {/* White background fill that moves from left to right */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgb(255, 255, 255)",
                        transformOrigin: "left center",
                        scaleX: 0,
                        zIndex: 1
                      }}
                      animate={{
                        scaleX: isHoverVariant ? 1 : 0
                      }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  style={{
                    flex: "none",
                    height: "auto",
                    position: "relative",
                    whiteSpace: "pre-wrap",
                    width: "400px",
                    wordBreak: "break-word",
                    wordWrap: "break-word",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "1.5em",
                    color: "rgba(255, 255, 255, 0.7)",
                    userSelect: "none"
                  }}
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
}; 