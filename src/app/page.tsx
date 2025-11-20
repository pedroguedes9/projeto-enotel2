import Counter from "@/component/Counter";
import Days from "@/component/Days";
export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-blue-700 ">
      <Days imageSrc="/enotel-main-pic.avif" type="corner-top">
        <Counter/>
      </Days>
      <Days imageSrc="/second-pic.jpeg" />
      <Days imageSrc="/third-pic.jpg" />
      <Days imageSrc="/fourth-pic.jpeg" type="corner-bottom"/>
    </div>
  );
}
