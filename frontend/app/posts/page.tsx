import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from '@/components/Pagination';
import { useState } from 'react';

async function getPosts(page = 1, pageSize = 10, search = '') {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[title][$containsi]=${search}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, meta } = await getPosts(page, 10, search);
      setPosts(data);
      setTotalPages(meta.pagination.pageCount);
    };
    fetchPosts();
  }, [page, search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.attributes.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.attributes.publishedAt).toLocaleDateString()}
              </p>
              <Link href={`/posts/${post.attributes.slug}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}