import Mark from "@/components/mark";
import { TextLoop, TextLoopRotatingText } from "@/components/text-loop";

export default function Page() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center h-[70dvh] container mx-auto"
    >
      <TextLoop className="select-none">
        <h1 className="font-mono">
          <span>Technical Lead</span>{" "}
          <span className="text-muted-foreground/70">at InfoTrack</span>
        </h1>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 font-mono  text-xl md:text-3xl lg:text-5xl">
          <Mark className="h-5 md:h-7.5 lg:h-12 text-primary" />
          <TextLoopRotatingText
            rotatingTexts={[
              "Elevating Quality",
              "Improving Delivery",
              "Raising Standards",
              "Boosting Output",
              "Mentoring Engineers",
              "Coaching Growth",
              "Building Leaders",
              "Scaling Practices",
              "Improving Reliability",
              "Streamlining Delivery",
              "Setting Best Practices",
              "Growing Skills",
            ]}
          />
        </div>
      </TextLoop>
    </section>
  );
}
