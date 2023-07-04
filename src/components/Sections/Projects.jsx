"use client"
import { useState, useEffect } from "react";

const Projects = () => {
    const [projectSelected, setProjetcSelected] = useState({})
    useEffect(() => {
        setProjetcSelected(projectsData[0])
    }, [])

    const projectsData = [
        {
            name: "Proyecto #1",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el primer proyecto que he realizado en mi vida profesional."
        },
        {
            name: "Proyecto #2",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el segundo proyecto que he realizado en mi vida profesional." 
        },
        {
            name: "Proyecto #3",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el tercer proyecto que he realizado en mi vida profesional."
        },
        {
            name: "Proyecto #4",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el cuarto proyecto que he realizado en mi vida profesional." 
        },
        {
            name: "Proyecto #5",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el quinto proyecto que he realizado en mi vida profesional."
        },
        {
            name: "Proyecto #6",
            img: "/images/hashiPhoto.jpg",
            description:"Este es el sexto proyecto que he realizado en mi vida profesional." 
        }
    ]


    return <section className="h-screen w-full flex">
        <div className="w-[50%] flex flex-col py-5 ">
            <div className="w-[80%] mx-auto mt-8 ">
                <h2 className="text-[32px] font-bold mb-5 " >Mis proyectos como desarrollador</h2>
                <p className="text-[24px] font-medium text-[#1e1e1e] mb-8 ">Aquí puedes encontrar tanto proyectos de nivel principiante y un poco de mi trabajo con startups tambien.</p>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-3 grid-rows-2 gap-9 ">
                {projectsData.map((project)=> (
                    <button onClick={() => {setProjetcSelected(project)}} className={`w-[200px] h-[130px]  border-[1px] border-black rounded-md flex flex-col hover:shadow-lg duration-150 hover:shadow-[#11111140] `}>
                        <img src={project.img} alt={project.name} className="w-full h-[100px] rounded-t-md" />
                        <span className="h-[30px] w-full rounded-b-md text-center bg-[#ddd] ">{project.name}</span>
                    </button>
                ))}
            </div>
        </div>
        <div className="w-[50%]  flex justify-center items-center ">
            <div className="w-[80%] h-[80%] m-auto border-[2px] border-black flex flex-col bg-[#cecece] ">
                <img src={projectSelected.img} alt="Product [LP]" className="w-full h-[360px] " />
                <div>
                    <h5>{projectSelected.name}</h5>
                    <p>{projectSelected.description}</p>
                </div>
            </div>
        </div>
    </section>;
};
  
export default Projects;
  