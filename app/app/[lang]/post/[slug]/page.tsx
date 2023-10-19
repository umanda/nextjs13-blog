import { readItems } from '@directus/sdk';
import directus from "@/lib/directus";
import CTACard from '@/components/elements/cta-card';
import SocialLink from '@/components/elements/social-link';
import PaddingContainer from '@/components/layout/padding-container';
import PostBody from '@/components/post/post-body';
import PostHero from '@/components/post/post-hero';
import { notFound } from 'next/navigation';
import React, { cache } from 'react';

const getPostData = cache(async (postSlug: string, locale: string) => {
    try {
        const post = await directus.request(readItems("post", {
            filter: {
                slug: {
                    _eq: postSlug,
                },
            },
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


        const postData = post?.[0];

        if (locale === "en") {
            return postData;
        } else {
            const localisedPostData = {
                ...postData,
                title: postData?.translations?.[0]?.title,
                description: postData?.translations?.[0]?.description,
                body: postData?.translations?.[0]?.body,
                category: {
                    ...postData?.category,
                    title: postData?.category?.translations?.[0]?.title,
                },
            };

            return localisedPostData;
        }

    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts");
    }
})

// Generate Metadata Function
export const generateMetadata = async ({ params: { slug, lang }, }: { params: { slug: string; lang: string; }; }) => {
    // Get Post Data from Directus
    const post = await getPostData(slug, lang);

    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post?.title,
            description: post?.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${slug}`,
            siteName: post?.title,
            images: [
              {
                url:`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
                width: 1200,
                height: 628,
              },
              {
                url:`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`, // small image
                width: 800,
                height: 600,
              },
            ],
            authors: ['Umanda Jayobandara'],
            locale: lang,
            type: "website",
          },
    };
};


export const generateStaticParams = async () => {
    /* return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug
        }
    }); */
    try {
        const posts = await directus.request(readItems("post", {
            filter: {
                status: {
                    _eq: "published",
                },
            },
            fields: ["slug"],
        }));



        const params = posts?.map((post) => {
            return {
                slug: post.slug as string,
                lang: "en",
            };
        });

        const localisedParams = posts?.map((post) => {
            return {
                slug: post.slug as string,
                lang: "fr",
            };
        });

        // Concat Localised and Regular Params
        const allParams = params?.concat(localisedParams ?? []);

        return allParams || [];

    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts slug");
    }

}

const Page = async ({ params, }: { params: { slug: string; lang: string; }; }) => {

    /* const post = DUMMY_POSTS.find((post) => post.slug === params.slug); */

    let locale = params.lang;
    let postSlug = params.slug;


    const post = await getPostData(postSlug, locale)

    if (!post) {
        notFound()
    }

    return (
        <PaddingContainer>
            <div className='space-y-10'>
                <PostHero locale={locale} post={post} />
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='relative'>
                        <div className='sticky flex items-center gap-5 md:flex-col top-20'>
                            <div className="font-medium md:hidden">Share this content:</div>
                            <SocialLink
                                isShareURL
                                platform="facebook"
                                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                            />
                            <SocialLink
                                isShareURL
                                platform="twitter"
                                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                            />
                            <SocialLink
                                isShareURL
                                platform="linkedin"
                                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
                            />
                        </div>
                    </div>
                    <PostBody body={post.body} />
                </div>
                {/* ---@ts-expect-error Async Server Component */}
                <CTACard locale={locale} />
            </div>
        </PaddingContainer>
    )
}

export default Page;