import Link from 'next/link';
import "./posts.css"
import { PostData } from "@/app/PostData";

export default function Home() {
  return <>
    <main>
      <h3>글</h3>

      {PostData.map((data, index) => <Link key={index} href={`./${data.title}`}>
        <article>
          <h1>{data.title}</h1>
          <time>{data.date}</time>
          <summary>
            {data.summary}
          </summary>
          <div className="tags">
            {data.tags.map((tag, index) => <span key={index} className="tag">
              #{tag}
            </span>)}
          </div>
        </article>
      </Link>)}
    </main>
  </>
}
