import Link from 'next/link';
import "./article.css"

export default function Home() {
  return <>
    <main>
      <h3>글</h3>

      <Link href="./제목제목">
        <article>
          <h1>제목제목</h1>
          <time>2023-08-10</time>
          <summary>
            요약된 글 or 앞부분 글
          </summary>
          <div className="tags">
            <Link className="tag" href="./">
              #nipa
            </Link>
            <Link className="tag" href="./">
              #nipa
            </Link>
            <Link className="tag" href="./">
              #nipa
            </Link>
          </div>
        </article>
      </Link>

      <Link href="./제목제목">
        <article>
          <h1>제목제목</h1>
          <time>2023-08-10</time>
          <summary>
            요약된 글 or 앞부분 글
          </summary>
          <div className="tags">
            <Link className="tag" href="./">
              #nipa
            </Link>
            <Link className="tag" href="./">
              #nipa
            </Link>
            <Link className="tag" href="./">
              #nipa
            </Link>
          </div>
        </article>
      </Link>
    </main>
  </>
}
