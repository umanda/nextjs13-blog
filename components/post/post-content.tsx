
import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
}
const PostContent = async ({post}: PostContentProps) => {
  
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-xs @md:text-sm text-neutral-400">
        <div className={`font-medium ${
          post.category.title === "Cities"
          ? "text-emerald-600"
          : "text-indigo-600"
        }`}>{post.category.title}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      <h2 className="@lg:text-3xl text-xl @md:text-2xl font-medium">{post.title}</h2>
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">{post.description}</p>
      <div className="flex items-center gap-2 pt-2">Read more <ArrowRight size='12'/></div>

    </div>
  );
};

export default PostContent;
