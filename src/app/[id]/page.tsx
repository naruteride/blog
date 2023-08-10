import "@/app/[id]/post.css";

export default function Page({ params }: { params: { id: string } }) {
    return <>
        <main>My Post: {params.id}</main>
    </>
}