import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-14 pt-10 text-slate-700">
      <div className="shell grid grid-cols-[1fr_auto] items-start gap-7 border-t border-slate-200 pt-7 max-md:grid-cols-1">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-display text-lg font-black tracking-[-0.015em] text-dev-navy">
            <span className="grid size-[42px] place-items-center overflow-hidden rounded-[13px] border border-cyan-100 bg-white/80">
              <Image src="/assets-devpilots-logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            </span>
            DevPilots
          </Link>
          <p className="mt-3 text-dev-gray">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-[18px] text-sm text-dev-gray">
          <span>
            <strong className="text-dev-navy">WhatsApp:</strong> {site.whatsapp}
          </span>
          <span>
            <strong className="text-dev-navy">Instagram:</strong> {site.instagram}
          </span>
          <span>
            <strong className="text-dev-navy">Ubicación:</strong> {site.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
