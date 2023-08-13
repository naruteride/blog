import "@/app/[id]/post.css";
import { MDXContent } from "mdx/types";

export default async function Page({ params }: { params: { id: string } }) {
    let Post: MDXContent | React.FC;

    try {
        Post = (await import(`@/app/posts/${params.id}.mdx`)).default;
    } catch (error) {
        try {
            Post = (await import(`@/app/posts/${decodeURI(params.id)}.mdx`)).default;
        } catch (error) {
            Post = () => <div>서버 상태 500</div>;
        }
    }

    return (
        <main className="post">
            <Post />
        </main>
    );
}

