import { OneRepMax } from "@modules/OneRepMax/OneRepMax";

export default function HomePage() {
  return (
    <div>
      <p className="text-slate-900 dark:text-slate-200">
        Calculate your one repetition maximum by entering the weight and
        repetitions.
      </p>
      <OneRepMax />
    </div>
  );
}
