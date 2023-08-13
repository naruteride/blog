import "@/app/[id]/post.css";
import { MDXContent } from "mdx/types";

export default async function Page({ params }: { params: { id: string } }) {
    const { default: Post }: {default: MDXContent} = await import(`@/app/posts/${decodeURI(params.id)}.mdx`);
    console.log(params.id);
    alert(params.id);

    return (
        <main className="post">
            <Post />
        </main>
    );
}

