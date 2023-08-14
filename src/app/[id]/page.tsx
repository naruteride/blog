import "@/app/[id]/post.css";
import { MDXContent } from "mdx/types";

export default async function Page({ params }: { params: { id: string } }) {
    let Post: MDXContent /*| React.FC*/;

    try {
        Post = (await import(`@/app/posts/${decodeURI(params.id)}.mdx`)).default;
    } catch (error) {
        Post = (await import(`@/app/posts/${params.id}.mdx`)).default;
    }

    return (
        <main className="post">
            <Post />
        </main>
    );
}

