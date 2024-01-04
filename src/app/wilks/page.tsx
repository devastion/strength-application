import { Wilks } from "@root/modules/Wilks";

export default function WilksPage() {
  return (
    <div>
      <p className="text-slate-900 dark:text-slate-200">
        Calculate your wilks score by entering your gender, bodyweight and total
        from the big three!
      </p>
      <Wilks />
    </div>
  );
}
