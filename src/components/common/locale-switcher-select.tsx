"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { useTransition } from "react";

type Props = {
  defaultValue: string;
  locales: { value: string; label: string }[];
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  locales,
  label,
}: Readonly<Props>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Valid combo of pathname + params
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger className="w-full flex items-center gap-2 rounded-lg border border-slate-300 bg-white shadow-sm px-3 focus:ring-2 focus:ring-primary/70">
        <Globe className="w-6 h-6 text-slate-700" />
        <div className="inline-block md:hidden">
          <SelectValue placeholder={label} />
        </div>
      </SelectTrigger>
      <SelectContent className="rounded-lg mt-2 shadow-lg border border-slate-200 bg-white z-[999]">
        {locales.map((locale) => (
          <SelectItem
            key={locale.value}
            value={locale.value}
            className="cursor-pointer hover:bg-slate-100 focus:bg-slate-100"
          >
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
