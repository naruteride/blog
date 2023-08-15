import Link from 'next/link';
import NavButton from "./NavButton"

export default function Header(): React.ReactElement {

    return <>
        <header>
            <Link href="/">
                방성훈 블로그
            </Link>
            <NavButton />
            {/* <button>
                ☰
            </button> */}
        </header>
    </>
}