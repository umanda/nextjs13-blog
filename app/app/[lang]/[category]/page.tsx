import React, { cache } from 'react'
import { readItems } from '@directus/sdk';
import directus from "@/lib/directus";
import PaddingContainer from '@/components/layout/padding-container';
import PostList from '@/components/post/post-lists';
import { Post } from '@/types/collection';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {

    try {
        const categories = await directus.request(readItems("category", {
            filter: {
                status: {
                    _eq: "published",
                },
            },
            fields: ["slug"],
        }));

        const params = categories?.map((category) => {
            return {
                category: category.slug as string,
                lang: "en",
            };
        });

        const localisedParams = categories?.map((category) => {
            return {
                category: category.slug as string,
                lang: "fr",
            };
        });

        const allParams = params?.concat(localisedParams ?? []);
        return allParams || [];

    } catch (error) {
        console.log(error);
        throw new Error("Error fetching categories");
    }

}

// Get Category Data
const getCategoryData = cache(
    async (categorySlug: string, locale: string) => {

        try {
            const category = await directus.request(readItems('category', {
                filter: {
                    slug: {
                        _eq: categorySlug,
                    },
                },
                fields: [
                    "*",
                    "translations.*",
                    "posts.*",
                    "posts.author.id",
                    "posts.author.first_name",
                    "posts.author.last_name",
                    "posts.category.id",
                    "posts.category.title",
                    "posts.translations.*",
                ],
            }));

            if (locale === 'en') {
                return category?.[0];
            } else {
                const fetchedCategory = category?.[0];
                const localisedCategory = {
                    ...fetchedCategory,
                    title: fetchedCategory.translations[0].title,
                    description: fetchedCategory.translations[0].description,
                    posts: fetchedCategory.posts.map((post: any) => {
                        return {
                            ...post,
                            title: post.translations[0].title,
                            description: post.translations[0].description,
                            body: post.translations[0].body,
                            category: {
                                ...post.category,
                                title: fetchedCategory.translations[0].title,
                            },
                        };
                    }),
                };
                return localisedCategory;
            }



        } catch (error) {
            console.log(error);
            throw new Error("Error fetching category");
        }
    }
);

// Generate Metadata Function
export const generateMetadata = async ({ params: { category, lang }, }: { params: { category: string; lang: string; }; }) => {
    // Get Data from Directus
    const categoryData = await getCategoryData(category, lang);

    return {
        title: categoryData?.title,
        // If you want to override title and have a specific one for this page
        /* title: {
            absolute: categoryData?.title,
        }, */
        description: categoryData?.description,

        openGraph: {
            title: categoryData?.title,
            description: categoryData?.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}`,
            siteName: categoryData?.title,
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
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}}`,
            languages: {
              'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en/${category}`,
              'fr-FR': `${process.env.NEXT_PUBLIC_SITE_URL}/fr/${category}`,
            }
          },
    }
}

export default async function Page({ params }: { params: { category: string, lang: string } }) {

    /* const category = DUMMY_CATEGORIES.find(
        (category) => category.slug === params.category
    );

    const posts = DUMMY_POSTS.filter(
        (post) => post.category.title.toLocaleLowerCase() === params.category
    ); */

    let locale = params.lang;
    const categorySlug = params.category;

    const category = await getCategoryData(categorySlug, locale);

    if (!category) {
        notFound();
    }

    const typeCorrectedCategory = category as unknown as {
        id: string,
        title: string,
        description: string,
        slug: string,
        posts: Post[]
    };

    return (
        <PaddingContainer>
            <div className="mb-10">
                <h1 className="text-4xl font-semibold">
                    {typeCorrectedCategory?.title}
                </h1>
                <p className="text-lg text-neutral-600">
                    {typeCorrectedCategory?.description}
                </p>
            </div>
            <PostList locale={locale} posts={typeCorrectedCategory.posts} />
        </PaddingContainer>
    )
}

//export default Page