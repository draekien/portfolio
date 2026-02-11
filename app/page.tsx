import Mark from "@/components/mark";
import { TextLoop, TextLoopRotatingText } from "@/components/text-loop";

export default function Page() {
  return (
    <section className="flex flex-col justify-center h-[70dvh]">
      <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-4 md:mb-16">
        Hi, I&apos;m William
      </h1>
      <TextLoop className="select-none">
        <span className="font-mono">Technical Lead</span>
        <div className="flex items-center gap-4 font-mono  text-xl md:text-3xl lg:text-5xl">
          <Mark className="h-5 md:h-7.5 lg:h-12 text-primary" />
          <TextLoopRotatingText
            rotatingTexts={[
              "Designing Systems",
              "Architecting Products",
              "Leading Change",
              "Setting Standards",
              "Pushing Boundaries",
              "Advocating Innovation",
              "Optimizing Outcomes",
              "Solving Challenges",
            ]}
          />
        </div>
      </TextLoop>
    </section>
  );
}
