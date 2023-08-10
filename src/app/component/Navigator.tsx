import Link from 'next/link';

export default function Navigator(): React.ReactElement {
    return (
        <nav>
            <span>
                분류
            </span>
            <ul>
                <Link href="./">
                    <li>전체</li>
                </Link>
                <Link href="./">
                    <li>니파 유데미 학습 일지</li>
                </Link>
                <Link href="./">
                    <li>배포 서비스</li>
                </Link>
            </ul>
        </nav>
    )
}