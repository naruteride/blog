import Link from 'next/link';

export default function Header(): React.ReactElement {
    return <>
        <header>
            <Link href="/">
                방성훈 블로그
            </Link>
        </header>
    </>
}