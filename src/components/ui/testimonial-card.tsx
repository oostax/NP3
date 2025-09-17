import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onTouchStart?: () => void
  onTouchEnd?: () => void
}

export function TestimonialCard({ 
  author,
  text,
  className,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd
}: TestimonialCardProps) {
  
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={cn(
        "flex flex-col rounded-lg",
        "p-4 text-start sm:p-4 md:p-6",
        "max-w-[320px] sm:max-w-[300px] md:max-w-[320px]",
        "transition-colors duration-300",
        "testimonial-card-dark",
        className
      )}
    >
      <div className="flex items-center gap-3 sm:gap-3">
        <Avatar className="h-12 w-12 sm:h-12 sm:w-12">
          <AvatarImage src={author.avatar} alt={`Фото автора отзыва ${author.name}`} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-base sm:text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm sm:text-sm text-gray-300">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-4 sm:mt-4 text-sm sm:text-sm md:text-md text-gray-300">
        {text}
      </p>
    </div>
  );
}