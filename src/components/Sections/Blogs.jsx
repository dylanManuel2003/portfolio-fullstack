import Link from "next/link";

const Blogs = () => {
  const blogList = [
    {
      title: "Blog 1",
      url: "https://medium.com/@dylanperaltasalerno/impulsa-tu-emprendimiento-con-ia-c%C3%B3mo-aprovechar-el-poder-de-la-inteligencia-artificial-2ef5ec193ed4",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ozBUD_OsH1dKkV1zivwYyg.jpeg",
      description:
        "Como usar la IA para emprender.",
    },
    {
      title: "Blog 2",
      url: "https://medium.com/@dylanperaltasalerno/impulsa-tu-emprendimiento-con-ia-c%C3%B3mo-aprovechar-el-poder-de-la-inteligencia-artificial-2ef5ec193ed4",
      img: "/images/HashiPhoto.jpg",
      description:
        "Como usar la IA para emprender.",
    },
    {
      title: "Blog 3",
      url: "https://medium.com/@dylanperaltasalerno/impulsa-tu-emprendimiento-con-ia-c%C3%B3mo-aprovechar-el-poder-de-la-inteligencia-artificial-2ef5ec193ed4",
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ozBUD_OsH1dKkV1zivwYyg.jpeg",
      description:
        "Como usar la IA para emprender.",
    },
  ];

  return (
    <section className="h-screen w-full">
      <div className="w-[80%] mx-auto ">
        <h2 className="text-[36px] font-bold mb-5 ">Sección de Blogs</h2>
        <p className="text-[24px] font-medium ">
          Aqui puedes encontrar algunos de mis blogs en los que suelo tocar
          temas sobre tech, el mundo cripto, IA, programación y muchas otras
          cosas más.
        </p>
      </div>
      <div className="w-[80%] mx-auto flex flex-row justify-between my-10 ">
        {blogList.map((blog) => (
          <Link href={blog.url} target="_blank" className="w-[300px] h-[400px] flex flex-col border-2 border-black hover:shadow-lg duration-150 hover:shadow-[#11111140]">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-[50%] "
            />
            <div className="w-full h-[50%] p-3 ">
              <h5 className="font-bold">{blog.text}</h5>
              <p>
                {blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex">
        <Link
          href="https://medium.com/@dylanperaltasalerno"
          target="_blank"
          className=" mx-auto px-5 py-3 mt-2 rounded-[8px] border-[1px] border-[#18A0FB] text-[#18A0FB] hover:bg-[#eee] font-semibold "
        >
          Ver más blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
