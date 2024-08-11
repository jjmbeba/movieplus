import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import slug from 'slug'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getVoteAverageColor(vote_average: number): string {
  if (vote_average >= 7.5) {
    return 'bg-green-500';
  } else if (vote_average >= 5.0) {
    return 'bg-yellow-500';
  } else {
    return 'bg-red-500';
  }
}

export function getSlug(title: string): string {
  return slug(title, {lower: true})
}