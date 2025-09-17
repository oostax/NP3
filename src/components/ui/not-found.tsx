import { GridBeam } from "@/components/ui/background-grid-beam";

export default function DemoOne() {
  return (
    <div className="w-full h-screen bg-gray-900 border">
      <div className="w-full h-full bg-grid" style={{
        backgroundSize: '50px 50px',
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `
      }}>
        <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start h-full">
          <div className="grid gap-2">
            <h1 className="sm:text-5xl text-4xl font-bold max-w-sm text-white">Hero Section That Converts.</h1>
            <p className="text-neutral-400 max-w-lg">
              Showcase your creativity with a dynamic grid beam background—where modern aesthetics meet functional design.
            </p>
          </div>
        </GridBeam>
      </div>
    </div>
  );
}
