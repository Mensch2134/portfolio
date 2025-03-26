import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { defineQuery} from "next-sanity";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { notFound } from "next/navigation";

const PROJECT_QUERY = defineQuery(`*[
    _type == "project" &&
    slug.current == $slug
  ][0]{
    name,
    image,
    short_description,
    details,
    date
}`);

const customComponents = {
    block: {
      normal: ({ children }) => <p className="text-md">{children}</p>,
      // Add more custom block types here if needed
    },
    list: {
      // Customize how unordered lists are rendered
      bullet: ({ children }) => (
        <ul className="list-disc pl-7 mt-3">
          {children}
        </ul>
      ),
      // Customize how ordered lists are rendered
      number: ({ children }) => (
        <ol className="list-decimal pl-7 mt-3">
          {children}
        </ol>
      ),
    },
    listItem: {
      // Customize how each list item is rendered
      bullet: ({ children }) => (
        <li className="text-md">{children}</li>
      ),
      number: ({ children }) => (
        <li className="text-md">{children}</li>
      ),
    },
  };

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });

  if (!project) return notFound();

  return (
    <main className="container mx-auto p-12 bg-[#1d1b1d] rounded-sm">
      <h1 className="text-4xl text-[#cd6688] font-semibold">{project.name}</h1>
      {project.date && (
        <p className="text-gray-600">{new Date(project.date).getFullYear()}</p>
      )}
      {project.image?.length > 0 && (
        <Image
          src={urlFor(project.image[0])?.width(800).height(400).url() || ""}
          alt={project.name}
          width={800}
          height={400}
          className="mx-auto my-10 rounded-lg"
        />
      )}
      {project.details && <PortableText value={project.details} components={customComponents} />}
    </main>
  );
}
