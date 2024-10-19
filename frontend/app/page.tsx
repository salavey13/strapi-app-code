import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Blog</h1>
      <div className="space-y-4">
        <Button asChild>
          <Link href="/posts">View All Posts</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/categories">Browse Categories</Link>
        </Button>
      </div>
    </div>
  );
}