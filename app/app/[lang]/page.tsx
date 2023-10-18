import CTACard from '@/components/elements/cta-card'
import PaddingContainer from '@/components/layout/padding-container'
import PostCard from '@/components/post/post-card'
import PostList from '@/components/post/post-lists'
import { readItems } from '@directus/sdk';
import directus from "@/lib/directus";
import { notFound } from 'next/navigation'
import { Post } from '@/types/collection';

export default async function Home({ params }: { params: { lang: string } }) {


  let locale = params.lang;

  const getAllPosts = async () => {
    try {
      const posts = await directus.request(readItems('post', {
        fields: [
          "*",
          "category.id",
          "category.title",
          "auhtor.id",
          "author.first_name",
          "author.last_name",
          "translations.*",
          "category.translations.*",
        ],
      }));

      console.log("----post data 1----", posts[0]);


      return posts;

      /* if (locale === "en") {
        return posts;
      } else {
        const localisedPosts = posts?.map((post) => { //
          //console.log(post);
          return {
            ...post,
            title: post.translations[0].title,
            description: post.translations[0].description,
            body: post.translations[0].body,
            category: {
              ...post.category,
              title: post.category.translations[0].title,
            },
          };
        }); console.log(localisedPosts);

        return localisedPosts;
      } */

    } catch (error) {
      console.info(error);
      throw new Error("Error fetching posts");
    }
  };

 
  const convertToPostType = (data: any): Post => {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      category: data.category,
      author: data.author,
      slug: data.slug,
      image: data.image,
      body: data.body,
      date_created: data.date_created,
      date_updated: data.date_updated,
    };
  };

  const posts = await getAllPosts();
  const postOfTypePost = convertToPostType(posts[0]);

   if (!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
         <PostCard
          locale={locale}
          post={convertToPostType(posts[0])} />

         <PostList
          locale={locale}
          posts={posts.filter((post, index) => index > 0 && index < 3)}
          layout='vertical' />

        {/* ---@ts-expect-error Async Server Component */}
         <CTACard locale={params.lang} />

         <PostCard
          locale={locale}
          reverse
          post={convertToPostType(posts[3])} />

        <PostList
          locale={locale}
          posts={posts.filter((post, index) => index > 3 && index < 6)}
          layout='vertical' />

      </main>
    </PaddingContainer>

  )
}
