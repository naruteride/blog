"use client";

import "@/app/[id]/post.css";
import Post from '@/app/posts/니파 유데미 학습일지 3주차.mdx';

export default function Page({ params }: { params: { id: string } }) {

    return <>
        <main>
            <Post />
        </main>
    </>
}