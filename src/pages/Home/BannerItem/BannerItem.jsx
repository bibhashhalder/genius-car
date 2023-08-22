import "./BannerItem.css";
export default function BannerItem({ slide }) {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item  relative w-full">
      <img src={image} className="w-full rounded-xl " />

      <div className=" w-1/3 absolute ml-12  transform -translate-y-1/2 left-5  top-1/2">
        <h1 className="text-6xl text-white mb-12 font-bold">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-sm text-white mb-8 font-normal">
          There are many variations of passages of available, But the majority
          have suffered alteration in some form
        </p>
        <button className="btn btn-error mr-8">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-2">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
