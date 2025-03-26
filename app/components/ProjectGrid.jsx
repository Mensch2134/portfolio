import ProjectTile from "./ProjectTile"

import { client } from "@/sanity/lib/client"
import Link from "next/link";
import { defineQuery } from "next-sanity"
import { sanityFetch } from "@/sanity/lib/live"
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/sanity/lib/image"

const EVENTS_QUERY = defineQuery(`*[
    _type == "project"
    && defined(slug.current)
  ]{_id, name, slug, details, short_description, image}|order(date desc)`)

export default async function ProjectGrid() {
    const { data: projects } = await sanityFetch({ query: EVENTS_QUERY });

    return (
        <div>
            <div className="text-5xl font-bold text-[#cd6688] my-5 p-2">
                My Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-0">
                {projects.map((project) => (
                    <ProjectTile 
                        title={project.name} 
                        description={project.short_description}
                        thumbnail={urlFor(project.image[0]).url()}
                        slug={project.slug} 
                        key={project._id}/>
                ))}
            </div>
        </div>
    )
}