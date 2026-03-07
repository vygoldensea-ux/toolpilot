import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <section className="py-20">
        <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">The page you requested does not exist.</p>
        <Link href="/" className="mt-6 inline-block text-sm font-medium text-brand-700 hover:text-brand-800">
          Return home
        </Link>
      </section>
    </Container>
  );
}
