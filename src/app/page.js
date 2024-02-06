import { headers } from "next/headers";
import Link from 'next/link';

export default function Page() {
  const nonce = headers().get("x-nonce");

  return <div>
    <h1>Index Page</h1>
    <p>Inspect source to check if nonces exist. Value should be {nonce}</p>
    <Link href="/anotherpage">Another Page</Link>
    {/* <Script src="http://..." strategy="afterInteractive" nonce={nonce} /> */}
  </div>
}
