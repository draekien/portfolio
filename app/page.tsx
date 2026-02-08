import { TextLoop, TextLoopRotatingText } from "@/components/text-loop";

export default function Page() {
  return (
    <section className="flex flex-col justify-center h-[70dvh]">
      <TextLoop className="select-none">
        <span>Technical Lead</span>
        <span className="text-primary tracking-tighter ">\\</span>
        <TextLoopRotatingText
          className="col-span-2 w-full"
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
      </TextLoop>
    </section>
  );
}
