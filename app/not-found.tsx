import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-24">
            <article className="flex flex-col items-center justify-center">
                <FaceFrownIcon className="w-10 text-red-400" />
                <h2 className="text-xl font-semibold">404 Not Found</h2>
                <p>Could not find the requested Page.</p>
                <Link
                    href="/dashboard"
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                >
                    Go to Home
                </Link>
            </article>
        </main>
    );
}