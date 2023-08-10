import "@/app/[id]/post.css";

export default async function Page({ params }: { params: { id: string } }) {
    const { default: Post } = await import(`@/app/posts/${decodeURI(params.id)}.mdx`);

    return <>
        <main className="post">
            <Post />
        </main>
    </>
}