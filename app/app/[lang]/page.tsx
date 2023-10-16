import CTACard from '@/components/elements/cta-card'
import PaddingContainer from '@/components/layout/padding-container'
import PostCard from '@/components/post/post-card'
import PostList from '@/components/post/post-lists'
import { readItems } from '@directus/sdk';
import directus from "@/lib/directus";
import { notFound } from 'next/navigation'

export default async function Home() {

  const getAllPosts = async () => {
    try {
      const posts = await directus.request(readItems('post',{
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      }));
      return posts;

    } catch (error) {
      console.info(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  //console.info(posts);

  if(!posts){
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[0]} />
        <PostList
          posts={posts.filter((post, index) => index > 0 && index < 3)}
          layout='vertical' />

        {/* ---@ts-expect-error Async Server Component */}
        <CTACard />

        <PostCard reverse post={posts[3]} />
        <PostList
          posts={posts.filter((post, index) => index > 3 && index < 6)}
          layout='vertical' />

      </main>
    </PaddingContainer>

  )
}
